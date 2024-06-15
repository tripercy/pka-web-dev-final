import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LeftPane from './homepage/LeftPane';
import Latest from './homepage/Latest';
import TopNav from './nav/TopNav';
import Explore from './homepage/Explore';
import SignIn from './login_page/SignIn';

const App = () => {
    return (
        <div className="App">
            <body>
                <TopNav className="icon" />
                <div className='content'>
                    <LeftPane />
                    <div className="right-pane">
                        <Latest />
                        <Explore />
                    </div>
                </div>
            </body>
        </div>
    );
}



function FullApp() {
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const handleSignIn = () => {
        setIsSignedIn(true);
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<SignIn onSignIn={handleSignIn} />} />
                    {isSignedIn ? (
                        <Route path="/home" element={<App />} />
                    ) : (
                        <Route path="*" element={<Navigate to="/" />} />
                    )}
                </Routes>
                {/* {isSignedIn ? <App /> : <SignIn onSignIn={handleSignIn} />} */}
            </div>
        </Router>
    );
}

export default FullApp;
