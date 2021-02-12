import React, { Component } from 'react';
import NavigationBar from './NavigationBar/navigationBar';
//import logo from './SCCR LOGO.jpg';
import './app.css';
import Contact from './Contact/contactPage';
import BookingPage from './BookingPage/bookingPage';
import Directions from './Directions/directions';
import Footer from './Footer/footer';
import IntakeForm from './IntakeForm/intakeForm';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';






class App extends React.Component {
    state = {  }
    render() {
        return (
       <Router>
           <Switch>
           
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route path="/bookingPage" component={BookingPage} />
                    <Route path="/contactPage" component={contactPage} />
                    <Route path="/directions" component={DirectionsPage} />
                    <Route path="/intakeForm" component={IntakeForm} />
                    
              
               
            </Switch>

            
            <div className='container-fluid'>
                <Footer />
                </div>

               

                <div className='container-fluid'>
                    <NavigationBar />
                </div> 


            </Router>
           );
    }
}


export default App;

