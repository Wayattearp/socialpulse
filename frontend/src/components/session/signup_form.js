import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions/session_actions';

function SignupForm() {
    const [state, setState] = useState({
        email: '',
        handle: '',
        password: '',
        password2: '',
        errors: {}
    });
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const signedIn = useSelector((state) => state.signedIn);
    const errors = useSelector((state) => state.errors);

    useEffect(() => {
        if (signedIn) {
            navigate('/login', { state: { from: location } });
        }
    }, [signedIn, navigate, location]);

    const update = (field) => (e) => {
        setState({
            ...state,
            [field]: e.currentTarget.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: state.email,
            handle: state.handle,
            password: state.password,
            password2: state.password2
        };

        dispatch(signup(user, navigate));
    };

    const renderErrors = () => {
        return (
            <ul>
                {Object.keys(errors.session).map((error, i) => (
                    <li key={`error-${i}`}>{errors.session[error]}</li>
                ))}
            </ul>
        );
    };

    return (
        <div className="signup-form-container">
            <form onSubmit={handleSubmit}>
                <div className="signup-form">
                    <br />
                    <input
                        type="text"
                        value={state.email}
                        onChange={update('email')}
                        placeholder="Email"
                    />
                    <br />
                    <input
                        type="text"
                        value={state.handle}
                        onChange={update('handle')}
                        placeholder="Handle"
                    />
                    <br />
                    <input
                        type="password"
                        value={state.password}
                        onChange={update('password')}
                        placeholder="Password"
                    />
                    <br />
                    <input
                        type="password"
                        value={state.password2}
                        onChange={update('password2')}
                        placeholder="Confirm Password"
                    />
                    <br />
                    <input type="submit" value="Submit" />
                    {renderErrors()}
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
