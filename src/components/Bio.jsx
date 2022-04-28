import React from 'react'

const Bio = () => {
  return (
    <main className='bio'>
      <div className='image-container'>
        <img alt="Page creator's face photo"></img>
      </div>
      <div className="greeting">
          <div>Hi! I'm <span className="greeting-colored-text">Bartosz Brodowski</span></div>
          <div>A <span className="greeting-colored-text">Computer Science student</span> at the University of Gdańsk</div>
      </div>
    </main>
  )
}

export default Bio