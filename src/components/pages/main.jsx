import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Aside from '../common/aside';
import Alert from '../common/alert';
import image from '../../medic.jpeg';
import Login_link from '../common/login-link';
import Logout_link from '../common/logout-link';
import './style.css';


const Main = () => {
  const [user, setUser] = useState();
  const [isLoggedIn, setLogin] = useState();
  // const navigate = useNavigate(); 

  const login_user = JSON.parse(localStorage.getItem("login"));

  useEffect(() => {
    login_user ? setLogin(true) : setLogin(false);
  }, [isLoggedIn])

  return (
    <div className="container">
      <Aside />
      <div className="main-container">
        <header className="main-header">
          <div className="app-title">BloomBit</div>
          { isLoggedIn ?  <Logout_link/> : <Login_link /> }
        </header>
        <main className="main">
          <h3 className="main-head">Popular Healthcare</h3>
          <div className="main-section">
            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>
            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>
            
            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>

            <div className="section-item">
              <img className="specialist-img" src={image} />
              <p className="professional-name">Dr. Egunjobi David</p>
              <p className="specialty">Medical Doctor</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Main;
