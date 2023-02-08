import React from 'react'
import './keunggulan.css'
import {GiCoffeeBeans} from 'react-icons/gi'
import {BsAward} from 'react-icons/bs'
import {TbCoffee} from 'react-icons/tb'
import {GiReceiveMoney} from 'react-icons/gi'

const Keunggulan = () => {
  return (
    <section id='mine'>
      <div className="section__mine">

        <div className="section__mine-header">
          <h1>Why are we diffrent?</h1>
          <p>We don't just make your cofee, we make your day!</p>
        </div>

        <div className="section__mine-body">
        <div className="content__section">
          <div className="section__mine-content">
            <GiCoffeeBeans className='mine__icon'/>
            <div className="section__mine-content_deskripsi">
              <h3>Supreme Beans</h3>
              <p>Beans thats provides great taste</p>
            </div>
          </div>
        </div>
        <div className="content__section">
          <div className="section__mine-content">
            <BsAward className='mine__icon'/>
            <div className="section__mine-content_deskripsi">
              <h3>Supreme Beans</h3>
              <p>Beans thats provides great taste</p>
            </div>
          </div>
        </div>
        <div className="content__section">
          <div className="section__mine-content">
            <TbCoffee className='mine__icon'/>
            <div className="section__mine-content_deskripsi">
              <h3>Supreme Beans</h3>
              <p>Beans thats provides great taste</p>
            </div>
          </div>
        </div>
        <div className="content__section">
          <div className="section__mine-content">
            <GiReceiveMoney className='mine__icon'/>
            <div className="section__mine-content_deskripsi">
              <h3>Supreme Beans</h3>
              <p>Beans thats provides great taste</p>
            </div>
          </div>
        </div>
        </div>

        <div className="section__mine-footer">
          <p>Explore all flavours with us. thre is always a new cup worth experiencing</p>
          <h2>Get Started Today</h2>
          <button className="button-costum button-join">Join Us</button>
        </div>
      </div>
    </section>
  )
}

export default Keunggulan