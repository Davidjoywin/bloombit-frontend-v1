import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Aside from '../common/aside';
import Alert from '../common/alert';
import image from '../../medic.jpeg';
// import { get_operations, send_alert } from '../../config';
import Header from '../common/header';
import ReservationState from '../common/reservation-state';
import './style.css';


const Reservation = () => {

  const { id } = useParams();

  const [reservation_state, set_Reservation_state] = useState('completed');

  const [user, setUser] = useState();
  const [isLoggedIn, setLogin] = useState();
  // const navigate = useNavigate(); 

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
          <h3 className="main-head">Your Reservation</h3>
          <div className="main-section">
            <div className="reservation-container">
              <h2 className="reservation-head">Reservation</h2>
              <div className="reservation-state"><ReservationState state={reservation_state} /></div>
              <div className="reservation-detail-container">
                <div className="sub-info">Patient &#8658; </div>
                <span className="user-info">David Joy Egunjobi</span>
              </div>
              <div className="reservation-detail-container">
                <div className="sub-info">Recommend Professional &#8658; </div>
                <span className="user-info">David Joy Egunjobi</span>
              </div>
              <div className="reservation-detail-container">
                <div className="sub-info">Specialist &#8658; </div>
                <span className="user-info">Dentist</span>
              </div>
              <div className="reservation-detail-container">
                <div className="sub-info">Duration &#8658; </div>
                <span className="user-info">15  Minutes</span>
              </div>

              <div className="reservation-detail-container">
                <div className="sub-info">Description &#8658; </div>
                <span className="user-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam eos pariatur adipisci in eaque perspiciatis perferendis necessitatibus harum, ipsum omnis consequatur id eius quis commodi enim. Beatae, suscipit eum.</span>
              </div>

              <div className="reservation-detail-container">
                <div className="sub-info">Summary &#8658; </div>
                <span className="user-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam eos pariatur adipisci in eaque perspiciatis perferendis necessitatibus harum, ipsum omnis consequatur id eius quis commodi enim. Beatae, suscipit eum.</span>
              </div>

              <div className="reservation-detail-container">
                <div className="sub-info">Summary &#8658; </div>
                <span className="user-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam eos pariatur adipisci in eaque perspiciatis perferendis necessitatibus harum, ipsum omnis consequatur id eius quis commodi enim. Beatae, suscipit eum.</span>
              </div>

              <div className="reservation-detail-container">
                <div className="sub-info">Summary &#8658; </div>
                <span className="user-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam eos pariatur adipisci in eaque perspiciatis perferendis necessitatibus harum, ipsum omnis consequatur id eius quis commodi enim. Beatae, suscipit eum.</span>
              </div>
              <div className="reservation-bttn">
                <button className="reservation-edit-bttn">Edit</button>
                <button className="reservation-delete-bttn">Cancel</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  )
}

export default Reservation;
