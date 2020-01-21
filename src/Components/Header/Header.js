import React from 'react';
import logotip from '../../Assets/Images/logotip.png';
import './header.css';


const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logotip} alt="logo"/>
        </header>
    );
};

export default Header;