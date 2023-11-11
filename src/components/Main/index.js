import React from 'react';
import IndexPage from 'src/pages/IndexPage';
import { Route, Switch, useLocation } from 'react-router-dom';
import NotFoundPage from 'src/pages/NotFoundPage';
import InscriptionPage from 'src/pages/InscriptionPage';
import './styles.scss';

const Main = () => {
    return (
        <main>
        <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/inscription" exact component={InscriptionPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </main>
    );
};

export default Main;