import React from 'react'
import { Navigate } from 'react-router'

function RedirectWithRole(){
    return <Navigate to="/dashboard/reception" />
}

export default RedirectWithRole;