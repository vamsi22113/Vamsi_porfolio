import React from 'react'
import './Header.css'
import CV from '../../assest/RESUME.pdf'
import M from '../../assest/m3.jpg'
import HeaderSocials from './Header_socio'
const Header=()=>{
    return(
       <header id='h'>
  <div className="container header_container">
    
    {/* LEFT SIDE – IMAGE */}
    <div className="header_image_wrapper">
      <div className="me">
        <img src={M} alt="me" />
      </div>
    </div>

    {/* RIGHT SIDE – CONTENT */}
    <div className="header_content">
      <h1>Hello I'm</h1>
      <h1>Vamsi Krishna</h1>
      <h5 className="text-dark">Fullstack Developer</h5>
      
      <div className="r">
        <a href={CV} download className="btn btn-primary">Download Resume</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>

      <HeaderSocials />
      <a href="#contact" className="scroll_down">Scroll Down</a>
    </div>
    
  </div>
</header>


    )
}
export default Header