import './styles/App/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './pages/Components/Footer/Footer';
import Header from './pages/Components/Header/Header'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import {UserStorage} from './Hooks/Context/UserContext';
import User from './pages/User/User';
import Photo from './pages/Components/Photo/Photo';
import UserProfile from './pages/User/Profile/UserProfile'
import NotFound from './pages/Components/Helpers/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter className="App">
      <UserStorage>        
      <Header/>
      <main className="AppBody">
      <Routes>
      <Route path="/" element={<Home/>}/>

        <Route path="/login/*" element={<Login/>} />
        <Route path="/conta/*" element={<User/>}/>
        <Route path="/foto/:id" element={<Photo/>}/>
        <Route path="/perfil/:user" element={<UserProfile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </main>
    
    <Footer/>
    </UserStorage>
    </BrowserRouter>
  );
}

export default App;
