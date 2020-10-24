import React, { useEffect } from 'react'
import './Notification.css'

function Notification({ type, notification, setNotif }) {
    useEffect(() => {
        setTimeout(() => {
            setNotif('')
        }, 1500)
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div id={type === 'F' ? 'errorNotif' : "notification"}>
            {notification}
        </div>
    )
}

export default Notification
