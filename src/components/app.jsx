import React, { Component } from 'react';
import NavigationBar from './NavigationBar/navigationBar';

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

export default App;