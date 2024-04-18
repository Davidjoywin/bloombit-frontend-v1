import {useState, useEffect} from 'react';
import Aside from "../common/aside";
import Header from '../common/header';
import { get_access_token } from "../../config";


const AppointmentForm = () => {
  const [appt_data, setApptData] = useState({});
  const [isLoggedIn, setLogin] = useState(false);
  const is_user_logged_in = get_access_token();

  useEffect(() => {
      is_user_logged_in ? setLogin(true) : setLogin(false);
    },
  [isLoggedIn])

  return (
    <div className="container">
      <Aside />
        <div className="main-container">
          <Header isLoggedIn={isLoggedIn} />
          <main className="main">
            <h3 className="main-head">Appointment</h3>
            <div className="appmt-form-container">
              <form className="appmt-form" onSubmit={(e) => e.preventDefault() } >
                <h1 className="appmt-form-head">Fill for Reservation with a professional</h1>
                <div className="appt-input-container">
                  <label className="appt-input-label" >Type of specialist</label>
                  <select className="select appt-text-input" >
                    <option className="option" value="dentist">Dentist</option>
                    <option value="psychologist">Psychologist</option>
                    <option value="optician">Optician</option>
                    <option value="general medicine">General Medicine</option>
                    <option value="gynaechologist">Gynaechologist</option>
                  </select>
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Patient</label>
                  <input className="appt-text-input" type="text" value="David Joy" />
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Recommended Professional</label>
                  <input className="appt-text-input" type="text" value="Dr David" />
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Duration</label>
                  <input className="appt-num-input" type="number" min="5" step="5" placeholder='In minute'/>
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Summary</label>
                  <input type="text" className="appt-text-input" />
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Recommeded treatment</label>
                  <textarea className="appt-text-area" />
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Prescription</label>
                  <textarea className="appt-text-area" />
                </div>
                <button value="submit" className="appt-submit-bttn">Submit</button>

              </form>
            </div>
          </main>
       </div>
    </div>
  )
}

export default AppointmentForm;