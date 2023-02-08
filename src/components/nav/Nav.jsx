import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import './nav.css'

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='nav container'>

      <div className="nav__logo">
        <p><span>Coffee</span>  Time</p>
      </div>

      <div className="nav__links">
        <a href="/">Home</a>
        <a href="/">Menu</a>
        <a href="/">Aout Us</a>
        <a href="/">Contact Us</a>
      </div>

      <div className="nav__login">
        <div className="nav__login-login"><a href="/">Login</a></div>
        <div className="nav__login-signup"><p>Sign Up</p></div>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='fff' fontSize={27} onClick={() =>setToggleMenu(true)}/>

        {toggleMenu &&(
        <div className="app__navbar-smallscreen_overlay">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() =>setToggleMenu(false)}/>
          <ul className="app__navbar-smallscreen-links">
            <li className="p__opnensans"> <a href="/">Home</a> </li>
            <li className="p__opnensans"> <a href="/">Menu</a> </li>
            <li className="p__opnensans"> <a href="/">Aout Us</a> </li>
            <li className="p__opnensans"> <a href="/">Contact Us</a> </li>
          </ul>
        </div>
        )}
      </div>
 
    </div>
  )
}

export default Nav