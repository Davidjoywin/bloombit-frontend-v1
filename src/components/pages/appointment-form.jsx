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
            <div className="appmt-form">
              <form>

              </form>
            </div>
          </main>
       </div>
    </div>
  )
}

export default AppointmentForm;