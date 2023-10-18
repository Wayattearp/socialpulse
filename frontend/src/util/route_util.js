import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation();
    const loggedIn = useSelector((state) => state.session.isAuthenticated);

    if (!loggedIn) {
        return <Outlet />;
    }

    navigate('/tweets', { state: { from: location } });
    return null;
}

function Protected() {
    const navigate = useNavigate();
    const location = useLocation();
    const loggedIn = useSelector((state) => state.session.isAuthenticated);

    if (loggedIn) {
        return <Outlet />;
    }

    navigate('/login', { state: { from: location } });
    return null;
}

export { AuthRoute, Protected };
