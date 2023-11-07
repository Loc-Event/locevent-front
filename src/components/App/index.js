// == Import
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import './styles.scss';

// == Composant
const App = () => {
  return (
    <div className="appContainer">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

// == Export
export default App;
