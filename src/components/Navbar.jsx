import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li><img className="icon" alt="Home button" src='img/Home.svg'></img>Home</li>
            <li><img className="icon" alt="Skills button" src='img/Skills.svg'></img>Skills</li>
            <li><img className="icon" alt="Projects button" src='img/Projects.svg'></img>Projects</li>
            <li><img className="icon" alt="Contact button" src='img/Contact.svg'></img>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar