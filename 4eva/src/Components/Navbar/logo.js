import React from 'react'
import Tilt from 'react-tilt'
import logo from './logo.jpg'

const Logo = ()=>{
    return(
            <Tilt className="Tilt" options={{ max : 90, transition: true }} style={{ height: 55, width: 55 }} >
                <div className="Tilt-inner"><img className="logo shadow-lg rounded" alt= "Forever...and a day" src={logo}/></div>
            </Tilt>
    )
}

export default Logo