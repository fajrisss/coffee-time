import React from 'react'
import IMG7 from "../../assetss/cup.png"
import './order.css'

const Order = () => {
  return (
    <section className="app__bg-2">
      <div className="section__order">
        <div className="section__order-content">
          <h1>Get a Chance to have an amazing morning</h1>
          <p>We are giving you are one time opportunity to experience a better life with coffee</p>
          <button className='button-costum'> Order Now</button>
        </div>
        <div className="section_order-img">
          <img src={IMG7} alt="cup img" />
        </div>
      </div>
    </section>
  )
}

export default Order
