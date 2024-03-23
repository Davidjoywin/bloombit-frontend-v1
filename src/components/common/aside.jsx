import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="nav-list">
        <div className="nav-item">Home</div>
        <div className="nav-item">Home</div>
        <div className="nav-item">Home</div>
        <div className="nav-item">Home</div>
      </div>
      <div className="aside-other-container">
        <div className="apt-head-container">
          <h5 className="apt-head">Your appointments</h5>
          <Link className="add-apt-bttn">+</Link>
        </div>
        <div className="apts">
          <h1 className="apt-head-text">Your Appointments</h1>
          <p class className="apt-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link className="apt-link">Set an Appointment</Link>
        </div>

        <div className="apts">
          <h1 className="apt-head-text">Your Appointments</h1>
          <p class className="apt-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link className="apt-link">Set an Appointment</Link>
        </div>

        <div className="apts">
          <h1 className="apt-head-text">Your Appointments</h1>
          <p class className="apt-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link className="apt-link">Set an Appointment</Link>
        </div>

        <div className="apts">
          <h1 className="apt-head-text">Your Appointments</h1>
          <p class className="apt-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link className="apt-link">Set an Appointment</Link>
        </div>
      </div>
    </aside>
  )
}

export default Aside;