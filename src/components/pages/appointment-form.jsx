import Aside from "../common/aside"


const AppointmentForm = () => {
  return (
    <div className="container">
      <Aside />
        <div className="main-container">
          <header className="main-header">
            <div className="app-title">BloomBit</div>
            {/* { isLoggedIn ?  <Logout_link/> : <Login_link /> } */}
          </header>
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