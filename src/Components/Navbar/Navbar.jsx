import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-content'>
            <img className='logo' src="./images/code-logo.png" alt="" />
            <ul>
                <li>
                    <Link className='menu-item' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='menu-item' to='/skills'>Skills</Link>
                </li>
                <li>
                    <Link className='menu-item' to='/work-experience'>Work Experience</Link>
                </li>
                <li>
                <Link className='menu-item' to='/contact'>Contact Me</Link>
                </li>
                <button className='contact-btn'onClick={() => {}}>
                    Hire me
                </button>
            </ul>

            <button class="menu-btn" onClick={() => {}}>
                <span
                class={"material—symbols—outtined"}
                styte={{ fontSize: "1.8rem"}}
                >
                menu
                </span>
            </button>

        </div>
      </nav>
  )
}

export default Navbar