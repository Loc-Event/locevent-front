import React from 'react';
import './style.scss';

const InscriptionPage = () => {
    return (
    <>
    <form className='form-register'>
        <h1>S'inscrire</h1>
            <ul className="ul-register">
                <li>
                    <input type="text" name="lastname" placeholder="Nom"/>
                </li>


                <li >
                    <input type="text" name="firstname" placeholder="Prenom"/>
                </li>
                <li >
                    <input type="email" name="email" placeholder="email"/>
                </li>
                <li >
                    <input type="password" name="password" placeholder="password"/> 
                </li>
                <li >
                    <input type="password" name="password" placeholder="password"/>
                </li>  
                <button className="btn-submit" type="submit" name="Inscription">S'inscrire</button>
            </ul> 
    </form>
      </>
    );
};

export default InscriptionPage;