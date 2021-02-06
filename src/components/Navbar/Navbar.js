import React, { useState, useLayoutEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const setTheme = (light = false , start = false) => {
        if (light === true && start === true) {
            document.body.classList.toggle('dark')
        }
        else if (start === false) {
            document.body.classList.toggle('dark')
        }
        setLight(light)
        localStorage.setItem('portfolio_theme', light);
       
    }

    const useWindowSize = () => {
        const [size, setSize] = useState([0, 0])

        useLayoutEffect(() => {
            function updateSize() {
                if (window.innerWidth > 600)
                    setNav(false)
                setSize([window.innerWidth, window.innerHeight])
            }
            setTheme(localStorage.getItem('portfolio_theme'), true)
            window.addEventListener('resize', updateSize)
            updateSize()
            return () => window.removeEventListener('resize', updateSize)
        }, [])
        return size
    }
    useWindowSize();
    const [light, setLight] = useState(false)
    const [nav, setNav] = useState(false)
    return (
        <div id="Navbar">
             <button id="lightButton" onClick={() => setTheme(!light)}>
                    {light ? <img alt="light button" src={process.env.PUBLIC_URL + '/lightbulb.png'}></img>
                    : <img alt="light button" src={process.env.PUBLIC_URL + '/blueLight.png'}></img>} 
             </button>
            <div id="NavbarContainer">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div id="sideLogo">
                        <img alt="logo" src={process.env.PUBLIC_URL + '/i.png'}></img>
                        <span id="logoName">Ilias </span>
                        <span id="logoLastName">Kadimi</span>
                    </div>
                </Link>
                <div id={!nav ? "navLinks" : "navMenu"}>
                    <NavLink exact to="/" className="navLink" activeClassName="selected">
                        About Me
                    </NavLink>
                    <NavLink exact to="/projects" className="navLink" activeClassName="selected">
                       Projects
                    </NavLink>
                    <NavLink exact to="/contact" className="navLink" activeClassName="selected">
                        Contact
                    </NavLink>
                </div>
                <div id="navIcons">
                    <button id="moreButton" onClick={() => setNav(prevState => !prevState)}>
                        <img alt="show links" src={process.env.PUBLIC_URL + '/more.png'}></img>
                    </button>
                </div>
            
            </div>
        </div>
    )
}

export default Navbar
