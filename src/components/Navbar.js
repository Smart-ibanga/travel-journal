import React from 'react'
import worldGlobe from '../images/world-globe.png'

export default function Navbar() {
        return (

            <nav className="navbar">
                <img src={worldGlobe}
                alt="world-globe"
                />
                <h1 className='heading'>my travel journal</h1>
            </nav>
        )
}