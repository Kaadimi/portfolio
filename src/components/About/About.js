import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
    return (
        <div id="about">
            <div id="aboutContainer">
               <div id="profileImg">
                    <img alt="myImage" src={process.env.PUBLIC_URL + '/me.jpg'}></img>
               </div>
               <div id="AboutMe">
                    <span>Web Developer</span>
                    <h1>Ilias Kadimi</h1>
                    <p>
                       Aspiring Web developer, currently student in 1337 khouribga specilized in web applications.
                       Eager to learn, problem solver, motivated with high attention to detail.
                       Intrested in web developement and working on ambitions projects.
                    </p>
                    <div id="aboutActions">
                        <a href={process.env.PUBLIC_URL + 'iliasKadimi.pdf'} download id="downloadCv">
                            Download CV
                        </a>
                        <Link to='/contact'>
                            <button>Contact</button>
                        </Link>
                    </div>
               </div>
            </div> 
        </div>
    )
}

export default About
