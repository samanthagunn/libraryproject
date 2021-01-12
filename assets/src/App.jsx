import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Bookshelf from './pages/Bookshelf';
import AddBook from './pages/AddBook';
import Details from './pages/Details';
import Edit from './pages/Edit';
import ErrorBoundry from './ErrorBoundary';



const App = () => {

    return (
      <ErrorBoundry>
      <Router >
      <Header />
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Bookshelf" component={Bookshelf} />
          <Route exact path="/AddBook" component={AddBook} />
          <Route exact path="/Details/:id-:title" component={Details} />
          <Route exact path="/Edit/:id" component={Edit} />

        </Switch>
      
      <Footer />
      </Router>
      </ErrorBoundry>
    )
  
}
export default App;