import React from 'react'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import '../styles/Landing.css'

function Landing() {
    return (
        <div className='pageContainer'>
           <About />
           <Skills />
        </div>
    )
}

export default Landing
