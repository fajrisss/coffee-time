/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <section className='app__bg-3 container-footer'>
        <div className="section__footer">
         <div className="section__footer-aboutus">
         <h1>Coffee Time</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas delectus, dolores in perspiciatis optio, vero ipsum modi saepe quod esse iste!</p>
          <div className="footer__socials">
          <AiFillInstagram />
          <AiFillYoutube />
          <FaTiktok />
          <BsTwitter />
          </div>
         </div>

         <div className="section__footer-links">
          <h2>about</h2>
          <a href="/">Menu</a>
          <a href="/">Featurs</a>
          <a href="/">News & blogs</a>
          <a href="/">Help & Support</a>
         </div>

          <div className="section__footer-company">
            <h2>Company</h2>
            <a href="/">How We Work</a>
            <a href="/">Terms of service</a>
            <a href="/">pricing</a>
            <a href="/">FAQ</a>
          </div>

          <div className="section__footer-contact">
            <h2>Contact Us</h2>
            <p>jl. jalan terus, kayak beraknya kluar duit aja</p>
            <p>+1234567890</p>
            <p>coffeetime@gmial.com</p>
            <p>www.coffeetime.com</p>
          </div>
        </div>
    </section>
  )
}

export default Footer