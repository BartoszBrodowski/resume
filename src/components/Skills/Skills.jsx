import React from 'react'
import Python from "./img/python.svg"
import JavaScript from "./img/javascript.svg"
import { FaPython, FaJs, FaReact, FaSass } from "react-icons/fa"
import { SiGnubash } from "react-icons/si"
import { SiMicrosoftsqlserver } from "react-icons/si"
import { DiGit, DiNpm } from "react-icons/di"
import { FcLinux } from "react-icons/fc"


const Skills = ({anotherRef}) => {
  return (
      <div id="skills-section" ref={anotherRef}>
        <div className="skills-section-good">
            <h2>Good Knowledge</h2>
            <div className="skills-section-good-icons">
                <FaPython color="#3776AB" className="good-knowledge-icon"/>
                <FaJs color="#F7DF1E" className="good-knowledge-icon"/>
                <FaSass color="#CC6699" className="good-knowledge-icon" />
                <FaReact color="#61DAFB" className="good-knowledge-icon" />
                <DiGit color="#F05032" className="good-knowledge-icon" />
            </div>
        </div>
        <hr className="skills-dividing-line" />
        <div className="skills-section-basic">
            <h2>Basic Knowledge</h2>
            <div className="skills-section-basic-icons">
              <SiGnubash color="#4EAA25" className="basic-knowledge-icon" />
              <FcLinux className="basic-knowledge-icon" />
              <DiNpm color="#CB3837" className="basic-knowledge-icon" />
              <SiMicrosoftsqlserver className="basic-knowledge-icon" />
            </div>
        </div>
      </div>
  )
}

export default Skills