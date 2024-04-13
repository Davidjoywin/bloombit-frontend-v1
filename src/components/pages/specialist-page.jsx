import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Aside from '../common/aside';
import { BASE_URL, get_access_token } from '../../config';
import image from '../../medic.jpeg'
import Login_link from '../common/login-link';
import Logout_link from '../common/logout-link';
import './style.css';


const Specialist = () => {
  const [user, setUser] = useState();
  const [isLoggedIn, setLogin] = useState();
  // const navigate = useNavigate(); 

  const ACCESS_TOKEN = get_access_token();
  const URL = `${BASE_URL}account/user`;
  const HEADERS = {
    "Authorization": `Bearer ${ACCESS_TOKEN}`
  }

  useEffect(() => {
    fetch(URL, {
      headers: HEADERS
    })

    .then(response => response.json())

    .then(res => {
      if (!res) {
        setLogin(false)
      } else {
        setUser(res.user);
        setLogin(res.status);
      }
    })
  }, [])

  return (
    <div className="container">
      <Aside />
      <div className="main-container">
        <header className="main-header">
          <div className="app-title">BloomBit</div>
          { isLoggedIn ?  <Logout_link/> : <Login_link /> }
        </header>
        <main className="main">
          <h3 className="main-head">Specialists</h3>
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

export default Specialist;
