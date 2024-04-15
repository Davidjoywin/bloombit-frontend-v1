import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import Aside from '../common/aside';
import Alert from '../common/alert';
import image from '../../medic.jpeg';
// import { get_operations, send_alert } from '../../config';
import Header from '../common/header';
import DrawContext from '../common/context';
import './style.css';


const Main = () => {
  const [user, setUser] = useState();
  const [isLoggedIn, setLogin] = useState();
  // const navigate = useNavigate(); 

  const draw = useContext(DrawContext);

  console.log(draw);

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
    </>
  )
}

export default Main;
