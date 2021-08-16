import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../../Hooks/useForm";
import style from './LoginForm.module.css'
import Button from "../../Components/Formulario/Button/Button";
import Input from "../../Components/Formulario/Input/Input";
import {UserContext }from'../../../Hooks/Context/UserContext'
import ParagrafoErro from "../../Components/Helpers/Errors/error";
import StyleBtn from "../../Components/Formulario/Button/Button.module.css";

function LoginForm() {
  const username = useForm();
  const password = useForm();
const {userLogin,error,loading} = React.useContext(UserContext)



  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()){
      userLogin(username.value,password.value)
    };
  }
  return (
    <section className="animation-left">
      <h1 className="title">Login</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <Input label="Usúario" type="text" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading? <Button disabled>carregando....</Button> :    <Button>Entrar</Button>}
        <ParagrafoErro className="error" error={error} />
      </form>
      <Link className={style.perdeu}
       to="/login/perdeu">Perdeu a Senha?
        </Link>
        <div className={style.cadastro}>
            <h2 className={style.subtitle}>Cadastre-se</h2>
            <p>Ainda não posui conta? Cadastre-se no site.</p>

            <Link className={StyleBtn.button} to="/login/create">Cadastrar</Link>
        </div>    

 
    </section>
  );
}

export default LoginForm;
