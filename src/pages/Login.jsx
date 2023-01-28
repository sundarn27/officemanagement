import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import Title from "../images/coda-logo.png"
import { auth,storage } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

  const [sus,setSus] = useState(false);
  const [err,setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home")
      setSus(true);
    }catch{
      setErr(true);
    }
      
  };

  return (
    <div className="container-login">
        <div className="login">
          <img src={Title} className='title' />
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter E-Mail.. '  required />
                <input type="password" placeholder='Enter Password.. ' required />
                <button>Login</button>
                {sus && <span style={{color:"green"}}>Login Successful !</span>}
                {err && <span style={{color:"red"}}>Something went Wrong !</span>}
            </form>
        </div>
    </div>
  )
}

export default Login
