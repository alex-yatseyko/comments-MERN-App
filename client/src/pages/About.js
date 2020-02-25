import React from 'react'
import developer from '../assets/alex.jpeg'
import logo from '../logo.svg';


export const About = () => {
    return (
        <div className="container">
            About
            <a href="yatseyko.com">
                <img className="circle responsive-img avatar" src={developer} alt="alex"/>
            </a>
            <img src={ logo } alt="react" />
        </div>
    )
}
