import React, {useState} from 'react'
import './ProjectCard.css'

function ProjectCard({ project }) {
    const [show, setShow] = useState(false)
    const {title, subtitle, url, languages, img, gif, description, github, type} = project

    return (
        <div className="cardContainer">
            {show ? <div id="hoverContent">
                <button onClick={() => setShow(false)} className="cardButton" id="closeButton">
                    close
                </button>
                <img alt="animated project gif" src={gif}></img>
            </div> : null}
            <div id="projectCard">
                <div id="cardContent">
                        <span id="cardTitle">{title}</span>
                        <span id="cardSubtitle">{subtitle}</span>
                        <div id="cardLanguages">{languages.map(language => <span key={language} id="cardLanguage">{language}</span>)}</div>
                        <div id="cardButtons">
                            {url ? <a href={url} target="_blank" className="cardButton" rel="noopener noreferrer" id="urlLink">
                                <img alt="live project link" src={process.env.PUBLIC_URL + '/work.png'}></img>
                            </a> : null}
                            {type === 'system' ? null : <a href={github} target="_blank" className="cardButton" rel="noopener noreferrer" id="githubLink">
                                Code
                            </a>}
                            {type === 'system' ? null : <button onClick={() => setShow(true)} className="cardButton" id="showButton">
                                Show
                            </button>}
                            <img alt="project icon" src={img} atl="projectImage" id="projectImage"></img>
                        </div>
                        <span id="cardDescription">{description}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
