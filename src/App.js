import { styles } from './styles/App/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './pages/Components/Footer/Footer';
import Header from './pages/Components/Header/Header'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import {UserStorage} from './Hooks/Context/UserContext';
function App() {
  return (
    <BrowserRouter className="App">
      <UserStorage>        
      <Header/>
      <Routes>

        <Route path="/login/*" element={<Login/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    <Footer/>
    </UserStorage>
    </BrowserRouter>
  );
}

export default App;
