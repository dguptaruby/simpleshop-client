import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import env  from 'react-dotenv'
import './signin.css'
function Signin() {

    console.log(process.env)
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const history = useHistory()
    const handleSubmit = (e) =>{
        console.log(email,password);
        axios.post(`${process.env.REACT_APP_LINK}/login?email=${email}&password=${password}`)
        .then(res=>{
            history.push('/admin-product/products')
        })
        .catch(err=>alert('Incorrect id or password'))
        e.preventDefault()
    }
    return (
        <div className="container">
            <form className="signinpage" method="post">
                <div>
                    <label htmlFor="uname"><b>Email</b></label>
                    <input 
                    type="text" placeholder="Enter email" name="uname" required
                    onChange={(e)=>setemail(e.target.value)}
                     />
                </div>
                <div>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input 
                    onChange={(e)=>setpassword(e.target.value)}
                    type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <button className="loginbtn" type="submit" onClick={handleSubmit}>Login</button>
            
                <div>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    )
}

export default Signin
