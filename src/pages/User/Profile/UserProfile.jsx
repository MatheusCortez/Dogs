import React from 'react'
import { useParams } from 'react-router'


import Feed from '../Main/Feed/Feed'
import Head from '../../Components/Helpers/Head/Head'

const UserProfile = () => {
    
    const {user}  = useParams();
    return (
        
        <section className=" container mainSection">
              <Head title={user} />
            <h1 className="title">{user}</h1>
            <Feed user={user} />
        </section>
    )
}

export default UserProfile
