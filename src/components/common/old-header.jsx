import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return(
    <>
      <header className="app-header">
        <span className="app-logo size">
          <div className="logo size"></div>
        </span>
        <Link to="/auth/login" className="app-auth size">login</Link>
      </header>
    </>
    )
}

export default Header;