import { styles } from './styles/App/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './pages/Components/Footer/Footer';
import Header from './pages/Components/Header/Header'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter className="App">
    <Header/>
    <Switch>
    

      <Route path="/login"><Login/></Route>
      <Route path="/"><Home/></Route>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
