import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { UserContext } from '../../Hooks/Context/UserContext'
import Header from './Header/Header'
import Estatisticas from './Main/Estatisticas/Estatisticas'
import Feed from './Main/Feed/Feed'
import UserPhotoPost from './Main/Postar/UserPhotoPost'
import NotFound from '../Components/Helpers/NotFound/NotFound'
import PropTypes from 'prop-types';
import Head from '../Components/Helpers/Head/Head'


function User() {
  
    const {data} = React.useContext(UserContext)
    return (
        <section className="container">
          <Head title="Minha Conta" />
            <Header/>

            <Routes>
            <Route path="/" element={<Feed user={data.id} />}/>
            <Route path="/estatisticas" element={<Estatisticas/>}/>
            <Route path="/postar" element={<UserPhotoPost/>} />
            <Route path="*" element={<NotFound/>}/>
            </Routes>
        </section>
    )
}
Feed.propTypes = {
    user: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
  };

export default User
