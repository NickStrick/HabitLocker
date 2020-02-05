import React, { useState, useEffect } from 'react';
import './NavBelt.scss';

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

    return (
        <div className={`NavBelt ${pinText}`}>
            <h2>Planning</h2>
            <h2>Daily</h2>
            <h2>Monthly</h2>
            <h2>Custom</h2>
        </div>
    );
}

export default NavBelt;