import React from 'react'
import Nav from '../nav/Nav'
import './header.css'


const Header = () => {
  return (
    <><Nav/>
    <section className='app__bg'>
      
      <div className="header container">
        <div className="header__intro">
          <p>We’ve got your morning covered with</p>
        </div>

        <div className="header__logo">
          <p>Coffee</p>
        </div>

        <div className="header__deskripsi">
          <p>
            It is best to start your day with a cup of coffee. Discover the
            best flavours coffee you will ever have. We provide the best
            for our customers.
          </p>
          <button className='order__button'>Order Now</button>
        </div>

      </div>
    </section>
    </>

  )
}

export default Header