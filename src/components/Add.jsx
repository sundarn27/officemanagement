import React,{useState,useEffect} from 'react';
import {useHistory,useNavigate,useParams} from "react-router-dom";
import addImg from "../images/profile-user.png";
import {FaUserCircle} from 'react-icons/fa';
import {toast} from "react-toastify";
import db from "../firebase";
import { collection,addDoc} from "firebase/firestore"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc,setDoc } from "firebase/firestore"


function Add() {

  return (
    <div className="container-add">
        <label htmlFor="file"><img className='profile' src={addImg} /></label>
        <form>
            <input type="string" name="fname" placeholder='First Name' />
            <input type="string" name="lname" placeholder='Last Name' />
            <input type="string" name="email" placeholder='Enter E-Mail' />
            <input type="string" name="password" placeholder='Enter Password' />
            <input type="string" name="mobile" placeholder='Enter Mobile.No' />
            <input style={{color:"gray",fontFamily:"sans-serif"}} type="string" name="dob" placeholder='Date of Birth' />
            <input style={{display:"block"}} type="file" id="file" />
            <button>Submit</button>
            {/* {err && <span style={{color:"red"}}>Something went Wrong!</span>} */}
        </form>
    </div>
  )
}

export default Add