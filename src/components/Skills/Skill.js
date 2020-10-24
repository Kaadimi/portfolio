import React from 'react'
import './Skills.css'

function Skill({ skill }) {
    const {title, icon, description} = skill

    return (
        <div id="skillContainer">
            <div id="imgContainer">
                <img alt="skill icon" src={process.env.PUBLIC_URL + icon} id="skillIcon"></img>
            </div>
            <div id="skillInfo">
                <h1>{title}</h1>
                <ul>
                    {description.map((line, index) => <li key={index}>{line}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Skill
