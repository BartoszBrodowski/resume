import React from 'react'
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'

const Buttons = () => {
  return (
    <div className="buttons-container">
        <ul className="buttons-list">
            <a href="https://github.com/BartoszBrodowski" target={"_blank"}><li className="buttons-list-item"><FaGithub className="buttons-list-item-icon" Github icon/></li></a>
            <a href='https://gitlab.com/BartoszBrodowski' target={"_blank"}><li className="buttons-list-item"><FaGitlab className="buttons-list-item-icon" /></li></a>
            <a href="https://www.linkedin.com/in/bartosz-brodowski-425836235/" target={"_blank"}><li className="buttons-list-item"><FaLinkedin className="buttons-list-item-icon" /></li></a>
        </ul>
    </div>
  )
}

export default Buttons