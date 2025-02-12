import React from 'react'
import Pic2 from "../compontents/assests/Pic2.jpg"
import "../styles/contact.css"

export default function Contact() {
  return (
    <div className='contact'>
      <img src={Pic2} alt="" className='ima' />
      <div className='text'>
        <h2>Contact</h2>
        <h5>PH:4578625485</h5>
        <h5>Email:user@gmail.com</h5>
      
      </div>
      
    </div>
  )
}
