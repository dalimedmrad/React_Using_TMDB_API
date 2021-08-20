import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import "./lib/font-awesome/css/all.min.css";
import './App.css';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import {GlobalProvider} from './context/GlobalState'
import Footer from './components/Footer';

const  App = ()=> {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Watchlist/>
          </Route>
          <Route exact path="/watched">
            <Watched/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </GlobalProvider>
  );
}

export default App;
