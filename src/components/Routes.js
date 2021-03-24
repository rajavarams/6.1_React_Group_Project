import Navbar from './Navbar';
import Home from './Home';
import ContactUs from './ContactUs';
import Shopping from './Shopping';
import React, {Component} from 'react';
import '../index.css';
import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route
    
    // etc.
  } from 'react-router-dom';

class Routes extends Component {
    render(){
      return(
        <Router>
          <div>
            <Navbar />           
            <Route name="Home" exact path="/" component={Home}/>
            <Route name="Shopping" path="/Shopping" component={Shopping}/>
            <Route name="Contact Us" path="/ContactUs" component={ContactUs} />
          </div>
        </Router>
      );
    }
  }
  export default Routes;