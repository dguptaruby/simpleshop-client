import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../Header/Header'

function Home() {
    const [userData, setuserData] = useState()
    const history = useHistory()

    return (
        <div>
            <Header/>
        </div>
    )
}

export default Home
