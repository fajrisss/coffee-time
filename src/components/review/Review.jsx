import React from 'react'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import IMG0 from '../../assetss/review.png'
import './riview.css'

const Review = () => {
  return (
    <section className='container'>
      <div className="section__review">
        <h1>we really appreciate you</h1>
        <p>warm welcome</p>
        <div className="section__review-content">
          <p> <ImQuotesLeft className='review__icon' />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis labore expedita aut fugiat, amet explicabo, nobis repudiandae voluptates consectetur tempora voluptatibus adipisci. Sunt, illo maxime! Ex placeat accusantium nam rem delectus et, quo repudiandae quasi natus, maiores mollitia quam distinctio eaque commodi, adipisci aperiam corporis rerum officiis aliquid. Fuga in adipisci quasi unde nihil, magnam voluptate laborum consectetur at recusandae vitae? Possimus voluptate quo non odit nisi perferendis at iure?  <ImQuotesRight className='review__icon' /></p>
          <h3>Fajjris shoba</h3>
          <p>manager</p>
          <img src={IMG0} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Review