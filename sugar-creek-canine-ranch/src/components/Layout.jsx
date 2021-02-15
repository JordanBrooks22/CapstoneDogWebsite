import React from 'react';
import Header from './Header';
import NavBar from './NavBar';


const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div className="navigationWrapper">
            <Navigation />
            <main>{children}</main>
        </div>
    </React.Fragment>
    );
};
export default Layout;