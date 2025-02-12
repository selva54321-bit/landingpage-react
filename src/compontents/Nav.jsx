import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/nav.css"


export default function Nav() {
    const navi=useNavigate();

  return (
    <div className='top' >
    <ul >
      <li onClick={()=>navi("/")}>Home</li>
      <li onClick={()=>navi("/about")}>About</li>
      <li onClick={()=>navi("/contact")}>contact </li>
    </ul>
  </div>
  )
}
