import React from 'react';
import './NavBar.scss';
import logo from '../../logo.svg';

const NavBar = () => {

    return (
        <div className="NavBar">
            <div className='left'>
                <h1>HabitLocker</h1>
            </div>
            <div className='right'>
                <img className='profilePic' src={logo} />
            </div>

        </div>
    );
}

export default NavBar;