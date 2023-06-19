import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateRoutes = () => {
    const isAuthenticated = sessionStorage.getItem('cp');
    const location = useLocation();

    return (
        isAuthenticated ?
            <Outlet /> :
            <Navigate to="/login" replace state={{ from: location}} />
    );
}

export default PrivateRoutes;