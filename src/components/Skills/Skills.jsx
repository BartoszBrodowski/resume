import React from 'react'
import Python from "./img/python.svg"
import JavaScript from "./img/javascript.svg"
import { FaPython, FaJs, FaReact, FaSass } from "react-icons/fa"


const Skills = ({anotherRef}) => {
  return (
      <div id="skills-section" ref={anotherRef}>
        <div className="skills-selection skills-section-good">
            <h2>Good Knowledge</h2>
            <div className="skills-section-good-icons">
                <FaPython color="#3776AB" className="good-knowledge-icon"/>
                <FaJs color="#F7DF1E" className="good-knowledge-icon"/>
                <FaSass color="#CC6699" className="good-knowledge-icon" />
                <FaReact color="#61DAFB" className="good-knowledge-icon" />
            </div>
        </div>
        <div className="skills-selection skills-section-basic">
            <h2>Basic Knowledge</h2>
        </div>
      </div>
  )
}

export default Skills