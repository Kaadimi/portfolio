import React from 'react'
import Skill from './Skill'
import './Skills.css'

function Skills() {
    const skills = [
        {title: 'Front End', icon: '/web-design.png', description: ['Determining the structure and design of web pages.', 'Developing features to enhance the user experience.', 'Building reusable code for future use.', 'Utilizing a variety of markup languages to write web pages.']},
        {title: 'Back End', icon: '/backend.png', description: ['Integration of user-facing elements with server side logic', 'Optimization of the application for maximum speed and scalability', 'Implementation of security and data protection']},
    ]
    return (
        <div id="skillOuterContainer">
            <h2 id="whatIDo">What I Do</h2>
            <div id="skillsContainer" className="halfSize">
                {skills.map(skill => <Skill key={skill.title} skill={skill}/>)}
            </div>
        </div>
    )
}

export default Skills
