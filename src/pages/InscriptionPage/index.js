import React from 'react';
import './style.scss';


const InscriptionPage = () => {
    return (
    <>
    <form className='container'>
        <h3>Inscription</h3>
            <ul className="div-register">
                <li>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="email"/>
                </li>
                <li>
                    <label htmlFor="">Mot de passe</label>
                    <input type="password" name="password" placeholder="password"/> 
                </li>
                <li>
                    <label htmlFor="">Répeter le mot de passe</label>
                    <input type="password" name="password" placeholder="password"/>
                </li>  
                <button className="btn-submit" type="submit" name="Inscription">Inscription</button>
            </ul>
    </form>
      </>
    );
};

export default InscriptionPage;