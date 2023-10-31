// == Import
import './styles.scss';
import IndexPage from 'src/pages/IndexPage';
import { Route, Switch, useLocation } from 'react-router-dom';
import NotFoundPage from 'src/pages/NotFoundPage';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

// == Export
export default App;
