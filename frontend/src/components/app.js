import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './nav/navbar';
import MainPage from './main/main_page';
import LoginForm from './session/login_form';
import SignupForm from './session/signup_form';
// import { AuthRoute, Protected } from '../util/route_util';

import Profile from './profile/profile';
import TweetCompose from './tweets/tweet_compose';
import Tweets from './tweets/tweet';

const App = () => (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />

            <Route exact path="/tweets" component={<Tweets/>} />
            <Route exact path="/profile" component={<Profile/>} />
            <Route exact path="/new_tweet" component={<TweetCompose/>} />
        </Routes>
    </div>
);

export default App;
