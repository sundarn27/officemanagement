import React,{useState,useEffect} from 'react';
import {useHistory,useNavigate,useParams} from "react-router-dom";
import addImg from "../images/profile-user.png";
import {FaUserCircle} from 'react-icons/fa';
import {toast} from "react-toastify";
import db from "../firebase";
import { collection,addDoc} from "firebase/firestore"

function Add() {

  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [dob, setDob] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(fname, lname, email, password, mobile, dob !== ""){
      await addDoc(collection(db, "employees"),{
        fname,
        completed: false,
        lname,
        completed: false,
        email,
        completed: false,
        password,
        completed: false,
        mobile,
        completed: false,
        dob,
        completed: false,
      });
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
      setMobile("");
      setDob("");
    }
  }

  return (
    <div className="container-add">
        <label htmlFor="file"><img className='profile' src={addImg} /></label>
        <form onSubmit={handleSubmit}>
            <input type="text" name="fname" placeholder='First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
            <input type="text" name="lname" placeholder='Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
            <input type="email" name="email" placeholder='Enter E-Mail' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
            <input type="number" name="mobile" placeholder='Enter Mobile.No' onChange={(e) => setMobile(e.target.value)} />
            <input style={{color:"gray",fontFamily:"sans-serif"}} type="date" name="dob" placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
            {/* <input style={{display:"none"}} type="file" id="file" /> */}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Add