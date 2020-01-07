import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

export const NavBar = _ => {
    return (
        <header className='navbar'>
            <div className='navbar__icon'>
                <h1>
                    Classical ML React
                </h1>
            </div>
            <nav className='navbar__items'>
                <ul>
                    <li>
                        <NavLink to='/linear-regression'>Linear Regression</NavLink>
                    </li>
                    <li>
                        <NavLink to='/svm'>SVM</NavLink>
                    </li>
                    <li>
                        <NavLink to='/k-means'>K-Means</NavLink>
                    </li>
                    <li>
                        <NavLink to='/k-medoids'>K-Medoids</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}