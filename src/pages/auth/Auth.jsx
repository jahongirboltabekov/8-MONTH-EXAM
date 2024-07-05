import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function Auth() {
    let isLogin = useSelector(state => state.auth.token)
    return isLogin ? <Outlet/> : <Navigate replace to={'/login'}/>
}

export default Auth