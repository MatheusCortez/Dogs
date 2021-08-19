import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './Header/Header'
import Estatisticas from './Main/Estatisticas/Estatisticas'
import Feed from './Main/Feed/Feed'
import UserPhotoPost from './Main/Postar/UserPhotoPost'

function User() {
    return (
        <section className="container">
            <Header/>

            <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="/estatisticas" element={<Estatisticas/>}/>
            <Route path="/postar" element={<UserPhotoPost/>} />
            </Routes>
        </section>
    )
}

export default User
