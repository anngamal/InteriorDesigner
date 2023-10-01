import React, { useState } from 'react';
import { Link } from "react-router-dom"

export default function SignUp({ setInfo, setUser, user }) {
  const [formData, setFormData] = useState({ username: '', password: '' });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSignUp(e) {
    e.preventDefault()
    fetch("http://localhost:8085/signUp", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setInfo(prevInfos => [...prevInfos, data])
      })
    setUser({ username: formData.username, password: formData.password })
    // setFormData(resetForm)

  };

  return (
    <div id="signUpSection">

      <form id="formInfo" onSubmit={handleSignUp}>

        <h1 id="signUph1"> SIGN UP</h1>
        <input
          id="usernameSignUp"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          id="passwordSignUp"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button id="signUpBtn">Sign Up</button>
        <p id="signinP">ALready have an account?</p>
        <Link id="linkSignIn" to="/signIn">
          <h3>SIGN IN</h3>
        </Link>

      </form>
    </div>
  );
}