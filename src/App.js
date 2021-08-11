import { styles } from './styles/App/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './pages/Components/Footer/Footer';
import Header from './pages/Components/Header/Header'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter className="App">
    <Header/>
    <Routes>
    

      <Route path="/login/*" element={<Login/>} />
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
