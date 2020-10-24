import React from 'react'
import './Project.css'

function Project({ project }) {
    const {title, img} = project

    return (
        <div id="singleProject">
            <span>{title}</span>
            {/* <img src={process.env.PUBLIC_URL + img}></img> */}
        </div>
    )
}

export default Project
