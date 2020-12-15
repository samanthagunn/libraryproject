import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Header from './components/Header';


const App = () => {

    return (
      <Router >
      <Header />
      </Router>
    )
  
}
export default App