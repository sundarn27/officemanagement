import React from 'react'
import MDM from '../images/mdm-icon.png'
import E_PRO from '../images/E-procurements-icon.png'
import PDM from '../images/pdm-icon.png'
import RCM from '../images/RCM-icon.png'
import MAN from '../images/manpower-icon.png'
import IT from '../images/it-services-icon.png'

function Home() {
  return (
    <div className="container-card">
        <div className="card">
            <div className="round">
            <img src={MDM} alt="" />
            </div>
            <h3>MASTER DATA MANAGEMENT</h3>
            <h5>As a comprehensive method of enabling an enterprise, Master data management (MDM) links all of its critical data to one file, called a master file, which provides a common point of reference.</h5>
        </div>
        <div className="card">
            <div className="round">
            <img src={E_PRO} alt="" />
            </div>
            <h3>E-PROCUREMENT</h3>
            <h5>In this modern age, with the dawn of internet connected people everywhere around the globe almost all kinds of business transactions are done online.</h5>
        </div>
        <div className="card">
            <div className="round">
            <img src={PDM} alt="" />
            </div>
            <h3>PRODUCT DATA MANAGEMENT</h3>
            <h5>Product data management (PDM) is the process of using IT resources and services to store, manage, monitor and share data pertaining to a particular product. PDM incorporates tools and techniques to centrally store and manage all the data associated with a product’s life cycle.</h5>
        </div>
        <div className="card">
            <div className="round">
            <img src={RCM} alt="" />
            </div>
            <h3>PRODUCT DATA MANAGEMENT</h3>
            <h5>Product data management (PDM) is the process of using IT resources and services to store, manage, monitor and share data pertaining to a particular product. PDM incorporates tools and techniques to centrally store and manage all the data associated with a product’s life cycle.</h5>
        </div>
        <div className="card">
            <div className="round">
            <img src={MAN} alt="" />
            </div>
            <h3>PRODUCT DATA MANAGEMENT</h3>
            <h5>Product data management (PDM) is the process of using IT resources and services to store, manage, monitor and share data pertaining to a particular product. PDM incorporates tools and techniques to centrally store and manage all the data associated with a product’s life cycle.</h5>
        </div>
        <div className="card">
            <div className="round">
            <img src={IT} alt="" />
            </div>
            <h3>PRODUCT DATA MANAGEMENT</h3>
            <h5>Product data management (PDM) is the process of using IT resources and services to store, manage, monitor and share data pertaining to a particular product. PDM incorporates tools and techniques to centrally store and manage all the data associated with a product’s life cycle.</h5>
        </div>
    </div>
  )
}

export default Home