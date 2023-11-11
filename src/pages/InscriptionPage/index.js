import React from 'react';
import './style.scss';


const InscriptionPage = () => {
    return (
    <>
    <form className='container'>
        <h3>S'inscrire</h3>
            <ul className="div-register">
                <li>
                    <label htmlFor="">Nom</label>
                    <input type="text" name="lastname" placeholder="Nom"/>
                </li>
                <li>
                    <label htmlFor="">Prenom</label>
                    <input type="text" name="firstname" placeholder="Prenom"/>
                </li>
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
                <button className="btn-submit" type="submit" name="Inscription">S'inscrire</button>
            </ul>
    </form>
      </>
    );
};

export default InscriptionPage;