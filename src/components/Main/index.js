import React from 'react';
import IndexPage from 'src/pages/IndexPage';
import { Route, Switch, useLocation } from 'react-router-dom';
import NotFoundPage from 'src/pages/NotFoundPage';

const Main = () => {
    return (
        <Main>
        <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </Main>
    );
};

export default Main;