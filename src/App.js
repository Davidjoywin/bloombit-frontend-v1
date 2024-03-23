import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/authentication/login';
import Registration from './components/authentication/registration';
// import MainPage from './components/landing-page/index';
import Aside from './components/common/aside';
import Main from './components/landing-page/main';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="*" element={<h1>Page not found</h1>} />
          
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
          </Route>

          <Route path='/'>
            <Route index element={<Aside />} />
            <Route path="main" element={ <Main /> } />
            <Route path='' element={ <Navigate to="/" /> } />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
