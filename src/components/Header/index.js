import logo from '../../assets/images/logo.png';
import React from 'react';
import { useState } from 'react';
import HeaderMenu from '../HeaderMenu';
import './styles.scss';
import { useHistory } from 'react-router-dom';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const handleInscriptionClick = () => {
        history.push('/inscription')
    }
    const handleConnexionClick = () => {
        history.push('/connexion')
    }
    const handleLogoClick = () => {
        history.push('/')
    }

    return (
        <>
         <header>
            <div className="logo">
                   <img onClick={ handleLogoClick } src={logo} alt="loc'event" />
            </div>
            <ul className="header-menu">
                <button type="button" onClick={ handleInscriptionClick } className="header-btn">S'inscrire</button>
                <button type="button" onClick={ handleConnexionClick } className="header-btn">Se connecter</button>
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