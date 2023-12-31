import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/session_actions';

function NavBar() {
    const loggedIn = useSelector((state) => state.session.isAuthenticated);
    const dispatch = useDispatch();

    const logoutUser = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    const getLinks = () => {
        if (loggedIn) {
            return (
                <div>
                    <Link to={'/tweets'}>All Tweets</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/new_tweet'}>Write a Tweet</Link>
                    <button onClick={logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    return (
        <div>
            <h1>SocialPulse</h1>
            {getLinks()}
        </div>
    );
}

export default NavBar;
