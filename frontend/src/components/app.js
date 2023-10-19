import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './nav/navbar';
import MainPage from './main/main_page';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';

const App = () => (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
        </Routes>
    </div>
);

export default App;
