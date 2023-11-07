import logo from '../../assets/images/logo.png';
import React from 'react';
import { useState } from 'react';
import HeaderMenu from '../HeaderMenu';
import './styles.scss';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
         <header>
            <div className="logo">
                   <img src={logo} alt="loc'event" />
            </div>
            <ul className="header-menu">
                <button type="button" className="header-btn">Inscription</button>
                <button type="button" className="header-btn">Connexion</button>
            </ul>
                <i onClick={() => setShowMenu(true)} className={`fa-solid fa-bars fa-lg headerXs`}></i>
            {showMenu && (
                <>
                    <div onClick={() => setShowMenu(false)} className="calc"></div>
                    <HeaderMenu />
                </>
                )} 
        </header>
        </>
    );
};

export default Header;