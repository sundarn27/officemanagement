import React,{ useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import Title from "../images/coda-logo.png"
import { AuthContext } from "../context/AuthContext"
import { FaHome, FaUsers, FaFacebookMessenger, FaUserPlus, FaMailBulk, FaProjectDiagram,FaSignInAlt } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

function Navbar() {

const {currentUser} = useContext(AuthContext)

  return (
    <div className="container-nav">
      <div className="navbar">
        <img src={Title} className='title' />
            <ul>
                <li><Link to='/home' className='link'><FaHome className='icon'/>DASHBOARD</Link></li>
                <li><Link to='/employees' className='link'><FaUsers className='icon'/>EMPLOYEES</Link></li>
                <li><Link to='/chat'className='link'><FaFacebookMessenger className='icon'/>CHAT</Link></li>
                <li><Link to='/add'className='link'><FaUserPlus className='icon'/>ADD EMPLOYEE</Link></li>
                <li><Link to='/request'className='link'><FaMailBulk className='icon'/>REQUEST</Link></li>
                <li><Link to='/about'className='link'><FaProjectDiagram className='icon'/>ABOUT</Link></li>
            </ul>
        <div className="profile">
          <img className='profile-pic' src={currentUser.photoURL} alt="" />
          <button><Link to='/'><FiLogOut/></Link></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar