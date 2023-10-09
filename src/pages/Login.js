import React,{useState} from 'react'
import "../styles/Login.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
function Login() {
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/Login',{name,pass})
  }
  return (
    <center><div className='log'>
      <div className="login">
        <div className="logintop">
            <h3>LOG IN</h3>
            <form onSubmit={handleSubmit} >
                <label>Username</label>
                <input type='email' name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label>Password</label>
                <input type="text" name="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
                <p>Don't have account <Link to={"/Signup"}>Create One</Link></p>
                <button className="but" type='submit'>Log In</button>
            </form>
        </div>
      </div>
    </div>
    </center>
  )
}

export default Login
