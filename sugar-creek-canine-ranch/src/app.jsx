import React from 'react';
import './app.css';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./webpages/Home";
import bookingPage from "./webpages/bookingPage";
import contactPage from "./webpages/contactPage";
import directionsPage from "./webpages/directionsPage";
import intakeForm from "./webpages/intakeForm";
import NavBar from './components/NavBar';
//import Layout from '../components/Layout';

//import Header from './components/Header';
//import footer from './components/Footer';


function App() {
   return (
    
  
        <React.Fragment>
         <NavBar />
        
            <Switch>

              
            <Route exact path="/" component={Home} />
            <Route path="/bookingPage" component={bookingPage} />
            <Route path="/contactPage" component={contactPage} />
            <Route path="/directionsPage" component={directionsPage} />
            <Route path="/intakeForm" component={intakeForm} />

            

            </Switch>


       </React.Fragment> 
   );

   
    
}


export default App;

