import React from 'react'
import './subs.css'

const Subscribe = () => {
  return (
    <section className='app__bg-2'>
      <div className="section__subs">
        <div className="section__subs-head">
          <h1>Subsribe to get the lastest News</h1>
          <p>Dont miss out on our lastest news, update, tips and special offers</p>
        </div>
        <div className="section__subs-form">
          <input type="email" placeholder='enter your email'/>
          <button>subsribe</button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe