import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import Header from '../common/header';
import { BASE_URL } from '../../config';
import './style.css';
import { set_operation } from '../../config';


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // axios.defaults.baseURL = "http://127.0.0.1:8000/api"

  const URL = `${BASE_URL}/account/auth`;
  
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
    setPassword("");
  }

  const loginUser = () => {
    fetch(URL, OPTIONS)
    .then(response => {
      if (!response.ok) {
        // Alert("Login credential incorrect");
        return navigate("/auth/login");
      }
      // parse the response as JSON
      return response.json();
    })
    .then(res => {
      if (!res) {
        return navigate("/auth/login");
      }

      const login_user = res.user;
      const token_obj = {};
      token_obj['access'] = res.token.access.token;
      token_obj['refresh'] = res.token.refresh.token;
      login_user['token'] = token_obj;

      localStorage.setItem("login", JSON.stringify(login_user));
      
      // operation to know the type of pop up alert 
      // to be displayed
      set_operation('login', true);
      return navigate("/")
    })
  }

  return (
      <>
        {/* <Header /> */}
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
              <span className='auth-footer'>I have no account yet?</span>
              <Link to="/auth/register" className='register auth-bttn'>register</Link>
            </div>
          </form>

          {/* <Outlet /> */}
        </div>
      </>
  )
}

export default Login