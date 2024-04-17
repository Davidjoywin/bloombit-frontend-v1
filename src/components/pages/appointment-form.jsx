import {useState, useEffect} from 'react';
import Aside from "../common/aside";
import Header from '../common/header';
import { get_access_token } from "../../config";


const AppointmentForm = () => {
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
            <h3 className="main-head">Fill for appointment</h3>
            <div className="appmt-form-container">
              <form className="appmt-form">
                <div clssName="appt-input-container">
                  <label className="appt-input-label" >Duration</label>
                  <input className="appt-num-input" type="number" min="5" step="5" placeholder='5'/>
                </div>

                <div clssName="appt-input-container">
                  <label className="appt-input-label" >Recommeded treatment</label>
                  <textarea className="appt-text-area" />
                </div>

                <div clssName="appt-input-container">
                  <label className="appt-input-label" >Prescription</label>
                  <textarea className="appt-text-area" />
                </div>

                <div clssName="appt-input-container">
                  <label className="appt-input-label" >Summary</label>
                  <input type="text" className="app-text-input" />
                </div>
              </form>
            </div>
          </main>
       </div>
    </div>
  )
}

export default AppointmentForm;