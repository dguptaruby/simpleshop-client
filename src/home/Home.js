import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../Header/Header'

function Home() {
    const [userData, setuserData] = useState()
    const history = useHistory()
    const user = useSelector(state => state)
    console.log(user);
    return (
        <div>
           {user?.token?<Header/>:""}
        </div>
    )
}

export default Home
