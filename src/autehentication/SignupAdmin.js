import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Select from 'react-select'

function SignupAdmin() {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    
    const history = useHistory()
    
    // const [value, setValue] = useState('')
    const [isadmin, setIsAdmin] = useState(false)
    console.log(isadmin )
    
    
    const handleSubmit = (e) =>{
        console.log(email,password);
        axios.post(`${process.env.REACT_APP_LINK}/users?email=${email}&password=${password}`,{is_admin:isadmin})
        .then(res=>{
            localStorage.setItem('token',res.data.token)
            console.log(res)
            if(isadmin===true){
                history.push('/admin')
            }
            else{
                history.push('/admin-product/products')
            }
        })
        .catch(err=>console.log(err))
        e.preventDefault()
    }
    
    const changeHandler = value => {
        // setValue(value)
        if(value.value==="admin"){
            setIsAdmin(true)
            console.log(isadmin)
        }
        else{
            console.log('comehere')

        }
      }
    const options = [
        { value: 'admin', label: 'admin' },
        { value: 'user', label: 'user' },
      ]
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
                onChange={(e)=>setpassword(e.target.value)}/><br/>
                <div className="mt-4">
                <Select options={options} onChange={changeHandler} />

                </div>
                <p>By creating an account you agree to our <a href="/terms" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn ml-1" onClick={handleSubmit}>Sign Up</button>
                </div>
            </div>
        </form>
    )   
}

export default SignupAdmin
