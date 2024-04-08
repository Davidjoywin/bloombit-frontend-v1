import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../common/header';
import './style.css';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const URL = "http://127.0.0.1:8000/api/account/auth"
  
  const HEADERS = {
    "Content-Type": "application/json"
  }

  const data = {
    username: username,
    password: password
  }

  const OPTIONS = {
    method: 'post',
    headers: HEADERS,
    body: JSON.stringify(data)
  }

  const submitForm = (e) => {
    e.preventDefault();
    loginUser();
    setUsername("");
    setPassword("");
  }

  const loginUser = () => {
    console.log(username, password)
    fetch(URL, OPTIONS)
    .then(response => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      // parse the response as JSON
      return response.json();
    })
    .then(res => {
      navigate("/main");
    })
  }

  return (
      <>
        <Header />
        <div className="login-container">
          <form className='login-form' onSubmit={submitForm}>
            <h2 className="form-heading">Login</h2>
            <div className="label-input">
              <label className="login-username-label label">
                Username
              </label>
              <input type="text" required value={username} onChange={e => setUsername(e.target.value)} className="login-username-input input" placeholder="username"/>
          </div>

            <div className="label-input">
              <label className="login-password-label label">
                Password
              </label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="login-password-input input" placeholder="password" />
            </div>

            <input type="submit" className="submit-login auth-bttn" />
            <div className="register-container">
              <span>I have no account yet?</span>
              <Link to="/auth/register" className='register auth-bttn'>register</Link>
            </div>
          </form>

          {/* <Outlet /> */}
        </div>
      </>
  )
}

export default Login