import { Link } from 'react-router-dom';


const Logout_link = () => {
  return <Link to='/auth/logout' className="auth-link">Logout</Link>
}

export default Logout_link;