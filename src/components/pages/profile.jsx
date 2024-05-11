import { useState, useEffect } from 'react';

import Aside from '../common/aside';
import Alert from '../common/alert';
import Header from '../common/header';

const Profile = () => {
  const [isLoggedIn, setLogin] = useState();
  
  const login_user = JSON.parse(localStorage.getItem("login"));
  
  useEffect(() => {
    login_user ? setLogin(true) : setLogin(false);
  }, [isLoggedIn])
  
  return (
    <>
      <Alert />
      <div className="container">
      <Aside />
      <div className="main-container">
          <Header isLoggedIn={isLoggedIn}/>
          <main className="main">
            <h3 className="main-head">Profile</h3>
            <div className="main-section"></div>
          </main>
      </div>
      </div>
    </>
  )
}

export default Profile;