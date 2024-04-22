import { Link } from 'react-router-dom';
import { useState } from 'react';

import Alert from '../common/alert';
import { BASE_URL, set_operation } from '../../config';
// import './style.css';

const Registration = () => {
  const empty_data = {username: "", email: "", password: ""};
  const [register_user, setRegisterUser] = useState({...empty_data});
  const [verify_password, setVerifyPassword] = useState("");

  const HEADERS = {
    "Content-Type": "application/json"
  }

  const URL = `${BASE_URL}/account/register`;

  const OPTIONS = {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(register_user)
  }

  const submit_form = (e) => {
    console.log(e.target);
    e.preventDefault();
    const verified = register_user.password === verify_password;

    (verified) ? set_operation("failed_password_verification", true) : set_operation("failed_password_verification", false);
    if(verified) user_registration();
  }

  const user_registration = () => {
    fetch(URL, OPTIONS)
    .then(response => console.log(response));
  }

  return (
    <>
    {/* <Header /> */}
    <Alert />
    <div className="login-container">
      <form className='register-form' onSubmit={(e) => submit_form(e)} >
        <h2 className="form-heading-register">Register</h2>
        <div className="label-input">
          <label className="login-username-label label">
          Username
          </label>
          <input type="text" className="login-username-input input" value={register_user.username} onChange={(e) => setRegisterUser({...register_user, username: e.target.value})} placeholder="John Doe"/>
        </div>

        <div className="label-input">
          <label className="login-username-label label">
          Email
          </label>
          <input type="text" className="login-username-input input" value={register_user.email} onChange={(e) => setRegisterUser({...register_user, email: e.target.value})} placeholder="JohnDoe@gmail.com"/>
        </div>

        <div className="label-input">
          <label className="login-username-label label">
          Password
          </label>
          <input type="password" className="login-username-input input" value={register_user.password} onChange={(e) => setRegisterUser({...register_user, password: e.target.value})} placeholder="password"/>
        </div>

        <div className="label-input">
          <label className="login-password-label label">
          Verify Password
          </label>
          <input type="password" className="login-password-input input" value={verify_password} onChange={(e) => setVerifyPassword(e.target.value)} placeholder="verify   password" />
        </div>

        <input type="submit" className="submit-login auth-bttn" />
          <div className="register-container">
          <span className="auth-footer">I have an account?</span>
          <Link to="/auth/login" className='register auth-bttn'>login</Link>
          </div>
      </form>
    </div>
    </>
  )
}

export default Registration