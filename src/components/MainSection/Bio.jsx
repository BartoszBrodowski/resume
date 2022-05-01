import React from 'react'
import FacePhoto from "./img/facephoto.jpeg"

const Bio = () => {
  return (
    <main className='bio'>
      <div className='image-container'>
        <img src={FacePhoto} alt="Page creator's face"></img>
        <div className='first-decorative-circle'></div>
        <div className='second-decorative-circle'></div>
      </div>
      <div className="greeting">
          <div>Hi! I'm <span className="greeting-colored-text">Bartosz Brodowski</span></div>
          <div>A <span className="greeting-colored-text">Computer Science student</span> at the University of Gdańsk</div>
      </div>
    </main>
  )
}

export default Bio