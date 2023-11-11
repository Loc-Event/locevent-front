import React from 'react';
import IndexPage from 'src/pages/IndexPage';
import { Route, Switch, useLocation } from 'react-router-dom';
import NotFoundPage from 'src/pages/NotFoundPage';
import InscriptionPage from 'src/pages/InscriptionPage';
import ConnexionPage from 'src/pages/ConnexionPage';
import './styles.scss';

const Main = () => {
    return (
        <main>
        <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/inscription" exact component={InscriptionPage} />
            <Route path="/connexion" exact component={ConnexionPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </main>
    );
};

export default Main;