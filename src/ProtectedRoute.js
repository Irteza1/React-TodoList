import React from 'react'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = localStorage.getItem('email');
    let location = useLocation();

    if(!user) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;