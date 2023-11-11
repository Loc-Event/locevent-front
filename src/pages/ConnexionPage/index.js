import React from 'react';
import './style.scss';


const ConnexionPage = () => {
    return (
    <>
    <form className='container'>
        <h3>Se connecter </h3>
            <ul className="div-login">
                <li>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="email"/>
                </li>
                <li>
                    <label htmlFor="">Mot de passe</label>
                    <input type="password" name="password" placeholder="password"/>
                </li>
                <a href="/?">Mot de passe oublié ?</a>
                <button className="btn-submit" type="submit" name="Connexion">Se connecter</button>
                <p>Pas encore inscrit ?</p>
                <a href="/inscription">S'inscrire</a>
            </ul>
    </form>
      </>
    );
};

export default ConnexionPage;