import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Header from '../Header/Header'

function Home() {
    const [userData, setuserData] = useState()
    const history = useHistory()

    useEffect(() => {
      
      const token = localStorage.getItem('token')
      const CheckuserLogin = () => {
        if (token === null) {
          localStorage.setItem("token", "StrictMode");
          token = "";
  
        }
        else {
          axios.get(`${process.env.REACT_APP_LINK}/auto_login`,
            { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
              if (res?.data) {
                console.log(res.data)
                setuserData(res.data)
                history.push('/admin-product/products')
              }
            })
            .catch(err => console.log(err))
        }
      }
      CheckuserLogin()
    }, [])

    return (
        <div>
            <Header/>
        </div>
    )
}

export default Home
