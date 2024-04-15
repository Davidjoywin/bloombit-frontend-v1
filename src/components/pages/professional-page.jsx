import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aside from '../common/aside';
import { BASE_URL, get_access_token } from '../../config';
import image from '../../medic.jpeg'
import Header from '../common/header';
import Login_link from '../common/login-link';
import Logout_link from '../common/logout-link';
import './style.css';


const Professional = () => {
  // const [user, setUser] = useState();
  const [isLoggedIn, setLogin] = useState();
  // const navigate = useNavigate(); 

  const ACCESS_TOKEN = get_access_token();
  const URL = `${BASE_URL}account/user`;
  const HEADERS = {
    "Authorization": `Bearer ${ACCESS_TOKEN}`
  }

  // useEffect(() => {
  //   fetch(URL, {
  //     headers: HEADERS
  //   })

  //   .then(response => response.json())

  //   .then(res => {
  //     if (!res) {
  //       setLogin(false)
  //     } else {
  //       setUser(res.user);
  //       setLogin(res.status);
  //     }
  //   })
  // }, [])

  return (
    <div className="container">
      <Aside />
      <div className="main-container">
        <Header isLoggedIn={isLoggedIn} />
        <main className="main">
          <h3 className="main-head">Professionals</h3>
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

export default Professional;
