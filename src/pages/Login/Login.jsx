import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { Route, Routes,Navigate } from 'react-router-dom'
import LoginCreate from './Create/LoginCreate';
import ResetPassword from './ResetPassWord/ResetPassword';
import ForgotPassword from './forgotPassword/ForgotPassword';
import { UserContext } from '../../Hooks/Context/UserContext';


function Login() {
    const {login} =  React.useContext(UserContext)

    if(login) return <Navigate to='/conta' />
    return (
        <main>
            <Routes>
               <Route path="/" element={<LoginForm/>} />
               <Route path="/create" element={<LoginCreate/>} />
               <Route path="/forgot" element={<ForgotPassword/>} />
               <Route path="/reset" element={<ResetPassword/>} />
            </Routes>
        </main>
    )
}

export default Login
