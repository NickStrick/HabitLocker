import React, { useState, useEffect } from 'react';
import './NavBelt.scss';
import NavInfo from './NavInfo.js';

const NavBelt = () => {

    const [pinText, setPinText] = useState('down');
    const [scrollNum, setScroll] = useState(window.scrollY);

    function updateScroll() {
        if (window.scrolly !== scrollNum) {
            setScroll(window.scrollY)
        }

    }

    window.addEventListener('scroll', () => updateScroll());

    useEffect(() => {
        if (window.scrollY < 47) {
            if (pinText != 'down') {
                setPinText('down');
            }
        } else {
            if (pinText != 'up') {
                setPinText('up');
            }
        }
    });


    let dailysections = ['carrer', 'personal', 'relation', 'iterrelation', 'foods']

    return (
        <div className={`NavBelt ${pinText}`}>
            <div className='category'>
                <h2>Planning</h2>
                <div className='section'>
                    <NavInfo items={dailysections} />
                </div>
            </div>
            <div className='category'>
                <h2>Daily</h2>
                <div className='section'></div>
            </div>
            <div className='category'>
                <h2>Monthly</h2>
                <div className='section'></div>
            </div>
            <div className='category'>
                <h2>Custom</h2>
                <div className='section'></div>
            </div>
        </div>
    );
}

export default NavBelt;