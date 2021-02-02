import React, { Component } from 'react';
import NavigationBar from './NavigationBar/navigationBar';
import BookingPage from './BookingPage/bookingpage';

class App extends Component {
    state = {  }
    render() {
        return (
            <div className='container-fluid'>
                <NavigationBar />
            </div>
           
        );
    }
}
class Bravo extends Component {
    state = { }
    render() {
        return (
            <div className='container-fluid'>
                <BookingPage />
            </div>
        )
    }
}

export default App;
export default Bravo;
