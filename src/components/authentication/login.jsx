import { Link, } from 'react-router-dom';

import Header from '../common/header';
import './style.css';

const Login = ({ username, password }) => {

  return (
      <>
        <Header />
        <div className="login-container">
          <form className='login-form'>
            <h2 className="form-heading">Login</h2>
            <div className="label-input">
              <label className="login-username-label label">
                Username
              </label>
              <input type="text" className="login-username-input input" placeholder="username"/>
          </div>

            <div className="label-input">
              <label className="login-password-label label">
                Password
              </label>
              <input type="password" className="login-password-input input" placeholder="password" />
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