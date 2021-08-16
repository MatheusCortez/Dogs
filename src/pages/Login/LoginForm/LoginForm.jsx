import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../../Hooks/useForm";
import Button from "../../Components/Formulario/Button/Button";
import Input from "../../Components/Formulario/Input/Input";
import {UserContext }from'../../../Hooks/Context/UserContext'


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
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usúario" type="text" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading? <Button disabled>carregando....</Button> :    <Button>Entrar</Button>}
     
      </form>

      <Link to="/login/create">Cadastrar</Link>
      {error && <p>{error}</p>}
    </section>
  );
}

export default LoginForm;
