import React from 'react'

function LocationPin({ text }) {
    return (
        <div className="pin">
            <img alt="location pin" src={process.env.PUBLIC_URL + 'pin.png'} className="pin-icon" />
            <p className="pin-text">{text}</p>
        </div>
    )
}

export default LocationPin
