import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./login.module.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginCreate from "./Create/LoginCreate";
import ResetPassword from "./ResetPassWord/ResetPassword";
import ForgotPassword from "./forgotPassword/ForgotPassword";
import { UserContext } from "../../Hooks/Context/UserContext";
import Head from "../Components/Helpers/Head/Head";
import NotFound from "../Components/Helpers/NotFound/NotFound";

function Login() {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<LoginCreate />} />
          <Route path="/perdeu" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
