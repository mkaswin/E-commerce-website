import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on your email</h1>
      <p>Subscribe tom our Newsletter and stay Updated</p>
      <div>
        <input type="email" placeholder='You remail id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter