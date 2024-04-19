import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, get_access_token } from '../../config';

const Aside = () => {
  const [reservations, setReservations] = useState([]);

  let access_token = "";
  try{
    access_token = get_access_token();
  }
  catch {
    access_token = null;
  }

  const URL = `${BASE_URL}/consultation/user/reservations`;
  const HEADERS = {
    "Authorization": `Bearer ${access_token}`
  }

  useEffect(() => {
    fetch(URL, {headers: HEADERS})
    .then(response => {
      if (!response.ok) {
        return response;
      }
      if (response.status === 401) {
        console.log(response.status);
      }
      // return response.json();
    })
    .then(res => {
      if (!res) {
        return
      }
      setReservations(res.data);
    })
  }, [reservations])

  return (
    <aside className="aside">
      <div className="nav-list">
        <Link to="/main" className="nav-item">Home</Link>
        <Link to="/professional" className="nav-item">Professionals</Link>
        <Link to="/specialist" className="nav-item">Specialist Group</Link>
        <Link className="nav-item">Search</Link>
      </div>
      <div className="aside-other-container">
        <div className="apt-head-container">
          <h5 className="apt-head">Your appointments</h5>
          <Link to="/appointment" className="add-apt-bttn">+</Link>
        </div>
        <div className="apts">
          <h1 className="apt-head-text">Your Appointments</h1>
          <p className="apt-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link to="/reservation/:id" className="apt-link">Set an Appointment</Link>
        </div>

        <div className="apts">
          <h1 className="apt-head-text">Your Appointments</h1>
          <p className="apt-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link to="/reservation/:id" className="apt-link">Set an Appointment</Link>
        </div>

        <div className="apts">
          <h1 className="apt-head-text">Your Appointments</h1>
          <p className="apt-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link to="/reservation/:id" className="apt-link">Set an Appointment</Link>
        </div>

        <div className="apts">
          <h1 className="apt-head-text">Your Appointments</h1>
          <p className="apt-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link to="/reservation/:id" className="apt-link">Set an Appointment</Link>
        </div>
      </div>
    </aside>
  )
}

export default Aside;