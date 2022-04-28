import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaBrain, FaCode, FaEnvelope } from 'react-icons/fa'



const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li className='navbar-list-item'><AiFillHome className='navbar-list-item-icon'/><div>Home</div></li>
            <li className='navbar-list-item'><FaBrain className='navbar-list-item-icon'/><div>Skills</div></li>
            <li className='navbar-list-item'><FaCode className='navbar-list-item-icon'/><div>Projects</div></li>
            <li className='navbar-list-item'><FaEnvelope className='navbar-list-item-icon'/><div>Contact</div></li>
        </ul>
    </nav>
  )
}

export default Navbar