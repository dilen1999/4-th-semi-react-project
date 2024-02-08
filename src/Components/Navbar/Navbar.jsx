import React, { useState } from 'react'
import './navbar.css'



import { GiMedicines } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'




const Navbar = () => {
  const [active, setActive] = useState('navBar')
  // funtion to toggle navbar
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  // funtion to remove navbar
  const removeNavbar = () => {
    setActive('navBar')
  }

  return (
    <nav>
      <section className='navBarSection'>
        <header className='header flex'>

          <div className='logoDiv'>
            <a href='#' className='logo flex'>
              <h1>< GiMedicines className='icon' /> DD Medicine Purchase</h1>
            </a>
          </div>



          <div className={active}>
            {/* <ul className='navLists flex'>
                  
                  <li className='navItem'>
                    <a href='#'className='navLink'>Home</a>
                  </li>

                  <li className='navItem'>
                    <a href='#'className='navLink'>Packages</a>
                  </li>

                  <li className='navItem'>
                    <a href='#'className='navLink'>Shop</a>
                  </li>

                  <li className='navItem'>
                    <a href='#'className='navLink'>About</a>
                  </li>

                  <li className='navItem'>
                    <a href='#'className='navLink'>Pages</a>
                  </li>

                  <li className='navItem'>
                    <a href='#'className='navLink'>News</a>
                  </li>

                  <li className='navItem'>
                    <a href='#'className='navLink'>Contact</a>
                  </li>

                  <button className='btn'>
                    <a href='#'>BOOK NOW</a>
                  </button>
                </ul>
                
                <div onClick={removeNavbar}
                 className='closeNavbar'>
                  <AiFillCloseCircle className = 'icon'/>
                </div> */}
          </div>

          
          <Link className='btn btn-outline-primary'  to ="/adduser"  >
            Login
          </Link>
          



          <div onClick={showNav}
            className="toggleNavbar">
            <PiDotsNineBold className='icon' />
          </div>


        </header>
      </section>
    </nav>
  )
}

export default Navbar
