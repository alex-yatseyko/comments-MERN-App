import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.gif'

export const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
            <Link to="/" className="brand-logo"><img className="logo" src={logo} alt="Alex Yatseyko"/>Alex Yatseyko</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}
