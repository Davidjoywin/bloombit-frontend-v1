import {useState, useEffect} from 'react';
import Aside from "../common/aside";
import Header from '../common/header';
import { get_access_token, sendRequest, BASE_URL, HEADERS } from "../../config";


const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({});
  const [isLoggedIn, setLogin] = useState(false);
  const is_user_logged_in = get_access_token();

  const submitApplication = (e) => {
    e.preventDefault();
    sendRequest({url:"/consultation/make-reservation", method:'post', headers:HEADERS, body:appointment})
    .then(res => {
      if (!res.status) {
        console.log(res.data);
      }
      console.log(res.data);
    })
  }
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
              <form className="appmt-form" onSubmit={(e) => submitApplication(e) } >
                <h1 className="appmt-form-head">Fill for Reservation with a professional</h1>
                <div className="appt-input-container">
                  <label className="appt-input-label" >Type of specialist</label>
                  <select className="select appt-text-input" onChange={e => setAppointment({...appointment})} >
                    <option className="option" value="dentist">Dentist</option>
                    <option value="psychologist">Psychologist</option>
                    <option value="optician">Optician</option>
                    <option value="general medicine">General Medicine</option>
                    <option value="gynaechologist">Gynaechologist</option>
                  </select>
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Patient</label>
                  <input className="appt-text-input" type="text" value="David Joy" onChange={e => setAppointment({...appointment, patient: e.target.value})} />
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Preferred Professional</label>
                  <input className="appt-text-input" type="text" onChange={e => setAppointment({...appointment, professional_of_choice: e.target.value})} placeholder="Professional" />
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Duration</label>
                  <input className="appt-num-input" type="number" min="5" step="5" onChange={e => setAppointment({...appointment, duration: e.target.value})} placeholder='In minute'/>
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Summary</label>
                  <input type="text" onChange={e => setAppointment({...appointment, summary: e.target.value})} className="appt-text-input" />
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Recommeded treatment</label>
                  <textarea className="appt-text-area" onChange={e => setAppointment({...appointment, recommended_treatment: e.target.value})} />
                </div>

                <div className="appt-input-container">
                  <label className="appt-input-label" >Prescription</label>
                  <textarea className="appt-text-area" onChange={e => setAppointment({...appointment, prescription: e.target.value})} />
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