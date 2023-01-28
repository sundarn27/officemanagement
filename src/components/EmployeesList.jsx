import React, { useState,useEffect } from 'react';
import { getDocs,collection } from "firebase/firestore"
import db from "../firebase";
import { AiFillEdit,AiFillDelete,AiView } from 'react-icons/ai';
import { BiShow } from 'react-icons/bi';
import { async } from '@firebase/util';


const EmployeesList = () => {

    const [lists, setLists] = useState([])

    useEffect(() => {
      (async () => {
        const colRef = collection(db, 'users')
        const snapshots = await getDocs(colRef)
        const docs = snapshots.docs.map((doc) => {
            let data = doc.data()

            data.id = doc.id
            
            return data
        })
        setLists(docs)
      })()
    }, [])

    // useEffect(() => {
    //   lists.map(obj => {
    //     const id = obj.id
    //     const name = obj.fname+" "+obj.lname
    //     console.log(name)
    //   })
    // })

  return (
    <div className='list-container'>
        {lists.map(obj => {
          return (
          <div className="list">
            <img src="data:image/jpeg;base64,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" alt="" />
            <input style={{fontWeight:"800"}} type="text" value={obj.fName+" "+obj.lName} id='name' />
            <input type="email" value={obj.email} id='email' />
            <input type="text" value={obj.mobile} id='mobile' />
            <div className="action-buttons">
              <button style={{background:"green"}}><AiFillEdit/></button>
              <button style={{background:"red"}}><AiFillDelete/></button>
              <button style={{background:"blue" }}><BiShow /></button>
            </div>
          </div>
          
          )
        })}
    </div>
  )
}

export default EmployeesList