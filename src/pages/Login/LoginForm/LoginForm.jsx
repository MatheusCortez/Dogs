import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Components/Formulario/Button/Button';
import Input from '../../Components/Formulario/Input/Input';

function LoginForm() {
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({username,password})
        }).then((response)=>{
            console.log(response);
            return response.json();
        }).then((json)=>{
            console.log(json)
        })
    }
    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                    <Input label="Usúario" type="text" name="username" />
                    <Input type="password" label="Senha" name="password" />
                    <Button  >Entrar</Button>
            </form>


            <Link to="/login/create">Cadastrar</Link>
        </section>
       
    )
}

export default LoginForm
