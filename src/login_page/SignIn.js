import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import githubLogo from './github-logo.png';
import closeIcon from './close.svg';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    return (
        <div className="body">
            <div className="all-container col-12">
                {/* Logo */}
                <div className="logo-container">
                    <img src={githubLogo} alt="github-logo" className="logo" />
                </div>
                {/* Header Text */}
                <span className="text-white fs-4 fw-lighter login-text">Sign in to GitHub</span>
                {/* Alert */}
                {showAlert && (
                    <div className="alert-container">
                        <span style={{ marginRight: '20px' }}>Incorrect username or password.</span>
                        <img src={closeIcon} alt="close-icon" className="alert-close" onClick={() => setShowAlert(false)} />
                    </div>
                )}
                {/* Sign In */}
                <div className="signin-container rounded">
                    <div className="form-container">
                        <div className="mb-3">
                            <label htmlFor="inputUsername" className="mb-2 form-label text-white inputTitle">Username or email address</label>
                            <input
                                type="text"
                                className="form-control input"
                                id="inputUsername"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-0">
                            <div className="d-flex justify-content-between">
                                <label htmlFor="inputPassword" className="mb-2 form-label text-white inputTitle">Password</label>
                                <a href="/" className="forget-password">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                className="form-control input"
                                id="inputPassword"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <Link to="home">
                        <button type="button" className="btn btn-success signin-btn" >Sign in</button>
                    </Link>
                </div>
                {/* Create Account */}
                <div className="new-container">
                    <span><span className="new-text">New to GitHub? </span><a href="/" style={{ fontSize: '.9rem' }}>Create an account</a>.</span>
                </div>
                {/* Links */}
                <div className="links-container">
                    <a href="/">Terms</a>
                    <a href="/">Privacy</a>
                    <a href="/">Security</a>
                    <a href="/" className="text-muted">Contact GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;