import { mdiAccountAlertOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { Heart, Search, Cart } from 'akar-icons'
import React from 'react'
import logo from "../assets/img/logo.png"

function Header() {
  return (

    <header className="d-flex justify-content-center align-items-center p-3 shadow bg-light" style={{paddingTop: "29.5px", paddingBottom: "29.5px", height:" 100px;"}}>
     <div style={{height: "41px", top:"29px" , left:"54px"  }} className='d-flex justify-content-between align-items-center w-100 '>
         {/* Left: Logo and Text */}
      <div className="d-flex align-items-center w-25">
        <img
          src={logo}
          alt="Logo"
          className="me-2"
          style={{ width: '50px', height: '32px' }}
        />
        <span className=" fw-bold text-dark" style={{ fontSize: '34px' }}>Furniro</span>
      </div>

      {/* Center: Navigation Buttons */}
      <nav className="d-none d-md-flex w-50 justify-content-evenly">
      <a href="#home" className="text-decoration-none text-dark px-3 fs-6" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>Home</a>
      <a href="#about" className="text-decoration-none text-dark px-3 fs-6" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>Shop</a>
      <a href="#services" className="text-decoration-none text-dark px-3 fs-6" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>About</a>
      <a href="#contact" className="text-decoration-none text-dark px-3 fs-6" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>Contact</a>

      </nav>

      {/* Right: Icons */}
      <div className="d-flex align-items-center justify-content-center gap-3 w-25">
        <Icon path={mdiAccountAlertOutline} size={1} color="black" />
        <Search strokeWidth={2} size={23} />   
        <Heart size={23} /> 
        <Cart strokeWidth={2} size={23} /> 
      </div>
     </div>

    </header>

)
}

export default Header