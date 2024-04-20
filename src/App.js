// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/authentication/login';
import Logout from './components/authentication/logout';
import Registration from './components/authentication/registration';
// import MainPage from './components/landing-page/index';
import Main from './components/pages/main';
import { create_operations } from './config';
import Aside from './components/common/aside';
import Alert from './components/common/alert';
import DrawContext from './components/common/context';
import Reservation from './components/pages/reservation';
import Specialist from './components/pages/specialist-page';
import Appointment from './components/pages/appointment-form';
import Professional from './components/pages/professional-page';
import './App.css';
import ActionConfirmation from './components/common/action-confirmation';


function App() {

  create_operations();

  return (
    <>
    <Alert />
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1>Page not found</h1>} />
          
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="logout" element= {<Logout />} />
            <Route path="register" element={<Registration />} />
          </Route>

          <Route path='/'>
            <Route index element={<Main />} />
            <Route path='alert' element={<Alert />} />
            <Route path='r-test' element={<ActionConfirmation />} />
            <Route path="aside" element={<Aside />} />
            <Route path='specialist' element={<Specialist/>} />
            <Route path='professional' element={<Professional />} />
            <Route path='appointment' element={<Appointment />} />
            <Route path='reservation/:id' element={<Reservation />} />
            <Route path='' element={<Navigate to="/" />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
