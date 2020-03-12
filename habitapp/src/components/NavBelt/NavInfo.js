import React from 'react';

const NavInfo = (props) => {


    return (
        <div className="nav-info">
            {props.items.map((item) => {
                return (
                    <p>{item}</p>
                )
            })}
        </div>
    );
}

export default NavInfo;