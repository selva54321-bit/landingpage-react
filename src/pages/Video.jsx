import React from 'react'
import myVideo from "../compontents/assests/2098988-uhd_3840_2160_30fps.mp4"

export default function Video() {
  return (
    <div className='video'>
        <video className="vid" src={myVideo } autoPlay muted loop>
         

        </video>
      </div>
  )
}
