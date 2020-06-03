import React, { useState, useEffect } from 'react';
import './NavBelt.scss';
import NavSections from './NavSections.js';

const NavBelt = (props) => {

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
            {props.categoryData.map((catObj) => {
                return (
                    <div className='category' key={catObj.id}>
                        <h2>{catObj.name}</h2>
                        <div className={`section ${catObj.name} ${catObj.id}`} key={catObj.id}>
                            <NavSections catId={catObj.id} />
                        </div>
                    </div>)
            })}

        </div>
    );
}

export default NavBelt;