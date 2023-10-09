import React from 'react'
import "../styles/signup.css"
function signup() {
  return (
    <div className="sign">
      <center>
        <h3>Sign Up</h3>
      <form>
        <label>Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="email"/>
        <label>Password</label>
        <input type="password"/>
        <button id="but" type="Submit">Submit</button>
      </form>
      </center>
    </div>
  )
}

export default signup
