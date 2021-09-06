import './styles/App/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './pages/Components/Footer/Footer';
import Header from './pages/Components/Header/Header'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import {UserStorage} from './Hooks/Context/UserContext';
import User from './pages/User/User';
import ProtectedRoute from './pages/Components/Helpers/ProtectedRoute/ProtectedRoute';
import Photo from './pages/Components/Photo/Photo';

function App() {
  return (
    <BrowserRouter className="App">
      <UserStorage>        
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>

        <Route path="/login/*" element={<Login/>} />
       
        <ProtectedRoute path="/conta/*" element={<User/>}/>
        <ProtectedRoute path="/foto/:id" element={<Photo/>}/>
      </Routes>
    <Footer/>
    </UserStorage>
    </BrowserRouter>
  );
}

export default App;
