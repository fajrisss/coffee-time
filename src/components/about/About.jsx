import React from 'react'
import './about.css'
import Foto from '../../assetss/kopi.png'

const About = () => {
  return (
    <section className='container'>
        <div className="section__about">
          <div className="section__about-deskripsi">
            <h1 className='judul deskripsi'>Discover the Best Coffee</h1>
            <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
            <button className='button-costum'>Leran More</button>
          </div>
          <div className="section__about-img">
            <img src={Foto} alt="goto kopi" />
          </div>
        </div>
    </section>
  )
}

export default About
