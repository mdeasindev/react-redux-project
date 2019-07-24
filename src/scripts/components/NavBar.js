import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper purple lighten-1">
            <div className="container">
                <div className="nav-content">
                    <Link className="brand-logo" to="/"><i className="material-icons large">donut_small</i>React Redux</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;