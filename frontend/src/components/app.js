import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Routes, Route } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginFormContainer />} />
            <Route path="/signup" element={<SignupFormContainer />} />
        </Routes>
    </div>
);

export default App;
