import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { Route, Routes } from 'react-router-dom'
import LoginCreate from './Create/LoginCreate';
import ResetPassword from './ResetPassWord/ResetPassword';
import ForgotPassword from './forgotPassword/ForgotPassword';

function Login() {
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
