import React from 'react'
//import Pic from "../compontents/assests/pic.jpg"
import Pic from "../compontents/assests/Pic.jpg"
import "../styles/home.css"

export default function Home() {
  return (
    <div className='home'>
    <img src={Pic} alt="" id='img'/>      
    <div className="text-overlay">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, dolore similique. Vero tempora voluptate nesciunt consequatur non consectetur culpa quam soluta similique dolor laborum vitae, eum adipisci voluptatum impedit quibusdam!</div>
    </div>
  )
}
