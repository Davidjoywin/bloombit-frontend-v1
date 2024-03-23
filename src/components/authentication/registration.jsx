import { Link } from 'react-router-dom';
import Header from '../common/header';
// import './style.css';

const Registration = ({username, email, password, phone_number}) => {
    return (
        <>
        <Header />
        <div className="login-container">
          <form className='register-form'>
            <h2 className="form-heading-register">Register</h2>
            <div className="label-input">
              <label className="login-username-label label">
              Username
              </label>
              <input type="text" className="login-username-input input" placeholder="John Doe"/>
            </div>

            <div className="label-input">
              <label className="login-username-label label">
              Email
              </label>
              <input type="text" className="login-username-input input" placeholder="JohnDoe@gmail.com"/>
            </div>

            <div className="label-input">
              <label className="login-username-label label">
              Password
              </label>
              <input type="password" className="login-username-input input" placeholder="password"/>
            </div>

            <div className="label-input">
              <label className="login-password-label label">
              Verify Password
              </label>
              <input type="password" className="login-password-input input" placeholder="verify   password" />
            </div>

            <input type="submit" className="submit-login auth-bttn" />
              <div className="register-container">
              <span>I have an account?</span>
              <Link to="/auth/login" className='register auth-bttn'>login</Link>
              </div>
          </form>
        </div>
        </>
    )
}

export default Registration