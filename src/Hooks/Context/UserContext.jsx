import React from 'react'
import {TOKEN_POST,TOKEN_VALIDATE_POST,USER_GET} from '../../API/api'
import {useNavigate} from 'react-router-dom';


 export const UserContext = React.createContext();

 export const  UserStorage = ({children})=> {
     const [data,setData] = React.useState(null);
     const[login,setLogin] = React.useState(null);
     const[loading,setLoading] = React.useState(false);
     const[error,seterror] = React.useState(null);
    const navigate = useNavigate();

 const userLogout = React.useCallback( 
     async function() {
    setData(null);
    seterror(null);
    setLoading(false);
    window.localStorage.removeItem('token');
    console.log('passou logout')
    navigate('/login')

},[navigate])

React.useEffect(()=>{
    async function autoLogin(){
        const token = window.localStorage.getItem('token');
        if(token){
            try {
                seterror(null);
                setLoading(true);
                const {url,options} = TOKEN_VALIDATE_POST(token);
                const response = await fetch(url,options);
                if(!response.ok) throw new Error('Token Invalido')
                await getUser(token)
            } catch (error) {
                userLogout()
            }finally{
                setLoading(false)
            }
         
        }
    }
    autoLogin()
},[userLogout])


     async function getUser(token){
        const {url, options} = USER_GET(token);
      const response = await fetch(url,options);
      const json =  await response.json();
      setData(json);
      setLogin(true);
    }

     async function userLogin(username,password){
         try {
             seterror(null);
             setLoading(true);
            const {url,options} = TOKEN_POST({username,password });
            const tokenRes = await fetch(url,options);
            if(!tokenRes.ok) throw new Error(`Èrro:Usuario invalido`)
            const {token} = await tokenRes.json();
            window.localStorage.setItem('token',token);
            await getUser(token)
            navigate('/conta');
         } catch (error) {
             seterror(error.message);
             setLogin(false);
         }finally{
            setLoading(false)
         }
       
     }
   

    return (
        <UserContext.Provider value={{userLogin,userLogout, data,error,loading,login}}>
            {children}
        </UserContext.Provider>
    )
}
