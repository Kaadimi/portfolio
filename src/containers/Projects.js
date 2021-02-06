import React, { useState } from 'react'
import ProjectCard from '../components/projectCard/ProjectCard'
import '../components/Projects/Project.css'

function Projects() {
    const [type, setType] = useState('all')
    const projects = [
        {type: 'web', title: 'sportPlanner', subtitle: 'University schedule generator', img: '/timetable.svg', gif: '/timetable.gif', languages: ['Reactjs', 'Redux'], description: 'Project made for Mohammed VI Polytechnic University Sports departement helps to create an optimal schedule based on student choices', url: "https://um6psport.netlify.app/", github: 'https://github.com/Kaadimi/SportPlanning'},
        {type: 'web', title: 'redTetris', subtitle: 'Multiplayer web game', img: '/tetris.png', gif: '/Tetris.gif', languages: ['Nodejs', 'Reactjs', 'Redux', 'Socketio'], description: "RedTetris is a remastering of the beloved 80s game and making it multiplayer, you can joing rooms of 4 and be the last survivor.", url: 'https://red-tetris.netlify.app/', github: 'https://github.com/Kaadimi/red-tetris'},
        {type: 'web', title: 'hyperTube', subtitle: 'Movie streaming platform', img: '/movie.png', gif: '/Hypper.gif', languages: ['Nodejs', 'Vuejs', 'Vuex', 'Mysql', 'Oauth'] ,description: 'HyperTube is a group project offering all availble movies to bing watch and a community of movie lovers that interact with each other', url: false, github: 'https://github.com/Kaadimi/hypertube'},
        {type: 'web', title: 'Matcha', subtitle: 'Dating web app', img: '/dating-app.png', gif: '/Matcha.gif', languages: ['Nodejs', 'Vuejs', 'Vuex', 'Mysql'], description: 'Matcha a dating web application that matches interests and preferences of potentiel parteners inside your chosen area from your geolocation', url: false, github: 'https://github.com/Kaadimi/matcha'},
        {type: 'other', title: '21sh', subtitle: 'Unix shell', img: '/terminal.png', gif: '/21sh.gif', languages: ['C', 'Termcap'], description: 'Recreating shell like beheivor from multiline editing to command excution including Pipes and redirections', url: false, github: 'https://github.com/Kaadimi/21sh'},
        {type: 'other', title: 'Filler', subtitle: 'Algorithmic game', img: '/logic.png', gif: '/filler.gif', languages: ['C', 'VM'], description: 'Filler is a game which consists in filling a grid of a known size in advance with pieces of random size and shapes against a virtual player taking turns to fill up the most space', url: false, github: 'https://github.com/Kaadimi/filler'},
        {type: 'other', title: 'FDF', subtitle: 'Graphic programming', img: '/graphic.png', gif: '/fdf.gif', languages: ['C', 'MinilibX'], description: 'Basics of graphic programming, placement of points in space joined by segments with different observable viewpoints, scene rotation on diffrent axes and color adjustement', url: false, github: 'https://github.com/Kaadimi/fdf'},
        {type: 'system', title: 'Roger-skyline', subtitle: 'Network administration', img: '/security-system.png', gif: false, languages: ['VM', 'Ubuntu', 'Shell'], description: 'Services used on a server machine, changing dhcp and ssh system files, protecting server from ddos attacks and port scans, configuring a web server', url: false, github: false}
    ]

    const choosenProjects = (type) => {
        if (type === 'all')
            return projects
        else
            return projects.filter(project => project.type === type)
    }

    return (
        <div className='pageContainer'>
            <div id="projectPageTitle">
                <h1>Porjects</h1>
                <span>More to come</span>
            </div>
            <div id="projectsInnerContainer">
                <div id="filterButtons">
                    <button onClick={() => setType('all')} className={type === 'all' ? 'selected' : null}>All</button>
                    <button onClick={() => setType('web')} className={type === 'web' ? 'selected' : null}>Web</button>
                    <button onClick={() => setType('other')} className={type === 'other' ? 'selected' : null}>Other</button>
                </div>
                <div id="workContainer">
                    {choosenProjects(type).map((project, index) => <ProjectCard key={index} project={project}/>)}
                </div>
            </div>
        </div>
    )
}

export default Projects
