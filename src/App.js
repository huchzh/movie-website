import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import SignIn from './components/pages/SignIn';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar /> 
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movies" exact component={Movies}/>
        <Route path="/signin" exact component={SignIn}/>
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default App;
