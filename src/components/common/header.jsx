import { useState, useEffect, createContext } from 'react';

import Login_link from './login-link';
import Logout_link from './logout-link';
import DrawContext from '../common/context';


const DrawOut = () => {
  return (
    <div className="mobile-arrow out">
      <span>&#8594;</span>
    </div>
  )
}

const DrawIn = () => {
  return (
    <div className="mobile-arrow in">
      <span>&#8592;</span>
    </div>
  )
}


const Header = ({isLoggedIn}) => {

  const [is_drawn_out, setDrawnOut] = useState(false);

  const on_click = () => {
    (!is_drawn_out) ? setDrawnOut(true) : setDrawnOut(false);
  }

  // console.log(is_drawn_out);
  return (
    <header className="main-header">
      <button onClick={on_click} className="draw-bttn">{is_drawn_out ? <DrawIn/> : <DrawOut/>}</button>
      <div className="app-title">BloomBit</div>
      { isLoggedIn ?  <Logout_link/> : <Login_link /> }
    </header>
  )
}


export default Header;