import React from "react"
import Typed from "react-typed"

function Header() {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1 className="mb-3">Our Freely Project, Work in Process Now</h1>
            <Typed 
                className="typed-text"
                strings={["You'll see a lot of things us","Prefer to be shock","We are as exated as like you"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            
            <a href="#" className="btn-main-offer mt-3">Contact Us</a>

        </div>
    </div>
  )
}

export default Header