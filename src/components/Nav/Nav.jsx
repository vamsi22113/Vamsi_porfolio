import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
const Nav =() => {
const [activeNav, setActiveNav] = useState('#')
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    {/* <a className="navbar-brand" href="#"></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
 */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
       <li className="nav-item btn border-0">
          <a href="#h" style={{'text-decoration':'none','color':'black','padding':'5px'}} onClick={()=>setActiveNav('#h')} className={activeNav==='#h'?'active':''}>Home</a>
        </li>
        <li className="nav-item btn border-0">
          <a href="#about" style={{'text-decoration':'none','color':'black','padding':'5px'}} onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}>About</a>
        </li>
        <li className="nav-item  btn border-0">
          <a href="#experience" style={{'text-decoration':'none','color':'black','padding':'5px'}} onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''} onMouseDown={(e) => e.preventDefault()}>Skills</a>
        </li>
        <li className="nav-item btn border-0">
          <a href="#projects" style={{'text-decoration':'none','color':'black','padding': '5px'}} onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects'?'active':''}>Projects</a>
        </li>
         <li className="nav-item btn border-0">
          <a href="#contact" style={{'text-decoration':'none','color':'black','padding':'5px'}} onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

)
}
export default Nav