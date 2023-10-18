import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/session_actions';

function LoginForm() {
    const [state, setState] = useState({
        email: '',
        password: '',
        errors: {}
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser);
    const errors = useSelector((state) => state.errors);

    useEffect(() => {
        if (currentUser) {
            navigate('/tweets');
        }
    }, [currentUser, navigate]);

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
            password: state.password
        };

        dispatch(login(user))
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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={state.email}
                        onChange={update('email')}
                        placeholder="Email"
                    />
                    <br />
                    <input
                        type="password"
                        value={state.password}
                        onChange={update('password')}
                        placeholder="Password"
                    />
                    <br />
                    <input type="submit" value="Submit" />
                    {renderErrors()}
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
