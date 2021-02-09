import React, { Component } from 'react';
import NavigationBar from './NavigationBar/navigationBar';
import logo from './SCCR LOGO.jpg';
import './App.css';
import Contact from './Contact/contactPage';
import BookingPage from './BookingPage/bookingPage';
import Directions from './Directions/directions';
import Footer from '/Footer/footer';
import IntakeForm from '/IntakeForm/intakeForm';




class App extends Component {
    state = {  }
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <BookingPage />
                </div>
                <div className='container-fluid'>
                    <Contact />
                </div>

                <div className='container-fluid'>
                    <Directions />
                </div>

                <div className='container-fluid'>
                <Footer />
                </div>

                <div className='container-fluid'>
                    <IntakeForm />
                </div>

                <div className='container-fluid'>
                    <NavigationBar />
                </div> 
            </div>
           
           );
    }
}

export default App;

