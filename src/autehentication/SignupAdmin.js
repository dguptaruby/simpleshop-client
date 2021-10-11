import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

function SignupAdmin() {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const history = useHistory()
    const handleSubmit = (e) =>{
        console.log(email,password);
        history.push('/admin')
        axios.post(`${process.env.REACT_APP_LINK}/users?email=${email}&password=${password}`)
        .then(res=>{
            localStorage.setItem('token',res.data.token)
        })
        .catch(err=>console.log(err))
        e.preventDefault()
    }
    return (
        <form style={{ border: "1px solid #ccc" }}>
            <div className="signup-page container">
                <h1>Sign Up as admin</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required 
                onChange={(e)=>setemail(e.target.value)}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required 
                onChange={(e)=>setemail(e.target.value)}/>


                <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn ml-1" onClick={handleSubmit}>Sign Up</button>
                </div>
            </div>
        </form>
    )   
}

export default SignupAdmin
