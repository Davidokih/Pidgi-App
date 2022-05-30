import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUpSignIn/SignUp';
import SignIn from './SignUpSignIn/SignIn';
import Confirm from './SignUpSignIn/Confirm';

const DisplayPidgin = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <SignUp /> } />
                    <Route path="/signIn" element={ <SignIn /> } />
                    <Route path="/confirm" element={ <Confirm /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default DisplayPidgin;