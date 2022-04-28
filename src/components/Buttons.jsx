import React from 'react'
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'

const Buttons = () => {
  return (
    <div className="buttons-container">
        <ul className="buttons-list">
            <li className="buttons-list-item"><FaGithub className="buttons-list-item-icon" /></li>
            <li className="buttons-list-item"><FaGitlab className="buttons-list-item-icon" /></li>
            <li className="buttons-list-item"><FaLinkedin className="buttons-list-item-icon" /></li>
        </ul>
    </div>
  )
}

export default Buttons