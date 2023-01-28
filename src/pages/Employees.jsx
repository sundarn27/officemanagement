import React,{ useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import EmployeesList from '../components/EmployeesList';

function Employees() {

  return (
    <div>
        <Navbar/>
        <EmployeesList/>
    </div>
  )
}

export default Employees