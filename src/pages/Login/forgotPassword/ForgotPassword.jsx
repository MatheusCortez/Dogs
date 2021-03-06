import React from "react";
import Button from "../../Components/Formulario/Button/Button";
import Input from "../../Components/Formulario/Input/Input";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../../API/api";
import Error from "../../Components/Helpers/Errors/error";
import Head from "../../Components/Helpers/Head/Head";




function ForgotPassword() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email/Usuario" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando....</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}

export default ForgotPassword;
