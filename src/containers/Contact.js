import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Skill from '../components/Skills/Skill'
import Map from '../components/Map/Map'
import Notification from '../components/Notification/Notification'
import '../styles/Contact.css'

function Contact() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotif] = useState('')
    const infos = [
        {title: 'Address', icon: '/location.png', description: ['boulevard Mohammed V, Beni Mellal']},
        {title: 'Mobile', icon: '/mobile.png', description: ['+212 6 32 30 85 06']},
        {title: 'Mail', icon: '/envelope.png', description: ['ilkadimi@outlook.com']},
    ]
    const location = {
        address: 'boulevard Mohammed V, Beni Mellal',
        lat: 32.332405,
        lng: -6.362984,
      }
    function sendEmail(e) {
        e.preventDefault();
        
        if (!loading) {
            if (!e.target.name.value)
                setNotif('Name is required')
            else if (!e.target.email.value)
                setNotif('Email is required')
            else if (!e.target.subject.value)
                setNotif('Subject is required')
            else if (!e.target.message.value)
                setNotif('Message is required')
            else {
                setLoading(true)
                emailjs.sendForm('service_8uxjeuc', 'template_kdnkcdq', e.target, 'user_p2hFADtTZSZNcAVObkozc')
                .then((result) => {
                    setLoading(false)
                    setNotif('Thank you')
                    console.log(result.text);
                }, (error) => {
                    setLoading(false)
                    setNotif(error.text)
                    console.log(error.text);
                });
            }
        }
    }

    return (
        <div className='pageContainer'>
            <div id="projectPageTitle">
                <h1>Contact</h1>
                <span>Get in touch</span>
            </div>
            <div id="contactInnerContainer">
                <div id="mapsContainer">
                    <Map location={location} zoomLevel={15}/>
                </div>
                <div id="formContainer">
                    <div id="contactInfo">
                        <h2>Contact information</h2>
                        {infos.map(info => <Skill key={info.title} skill={info}/>)}
                    </div>
                    <div id="formInnerContainer">
                        <h2>Send a message?</h2>
                        <form id="contactForm" onSubmit={sendEmail}>
                            <div id="formLeftSide">
                                <input placeholder="Name" id="formName" name="name"></input>
                                <input placeholder="Email" id="formEmail" name="email"></input>
                                <input placeholder="Subject" id="formSub" name="subject"></input>
                            </div>
                            <textarea placeholder="Message" id="formMsg" name="message"></textarea>
                            <button type="submit" id="formBtn" className={loading ? 'disabled' : null}>
                                {loading ? <div class="spinner">
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                        </div> : <span>Send</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {notification ? <Notification type={notification === 'Thank you' ? 'S' : 'F'} notification={notification} setNotif={setNotif} /> : null}
        </div>
    )
}

export default Contact
