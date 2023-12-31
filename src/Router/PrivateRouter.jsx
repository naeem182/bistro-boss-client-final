import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>

        </>
    }
    if (user) {
        return children;
    }
    // return <Navigate state={location.pathname} to={'/login'}></Navigate>
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

}

export default PrivateRouter
