import React from 'react'
import Python from "./img/python.svg"
import JavaScript from "./img/javascript.svg"
import { FaPython, FaJs, FaReact, FaSass } from "react-icons/fa"

const Skills = () => {
  return (
      <div id="skills-section">
        <div className="skills-selection skills-section-good">
            <h2>Good Knowledge</h2>
            <div className="skills-section-good-icons">
                <FaPython className="good-knowledge-icon"/>
                <FaJs className="good-knowledge-icon"/>
                <FaSass className="good-knowledge-icon" />
                <FaReact className="good-knowledge-icon" />
            </div>
        </div>
        <div className="skills-selection skills-section-basic">
            <h2>Basic Knowledge</h2>
        </div>
      </div>
  )
}

export default Skills