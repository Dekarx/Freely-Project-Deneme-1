import React from "react"
import logo from "../logo.png"

// React Fontawesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
    

        <nav className="navbar navbar-expand-lg navbar-light ">
        
            <div className="container">

                <a className="navbar-brand" href="#">
                    <img className="logo" src={logo} alt="logo.." />
                </a>

                <a className="navbar-brand ml-1" href="#">
                    <h3 className="logo-text mt-2">Freely</h3>
                </a>
                

                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color:"#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    
                    </ul>

                </div>
                
            </div>

        </nav>

    
    
    </>
  )
}

export default Navbar