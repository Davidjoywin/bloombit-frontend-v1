import { Navigate } from 'react-router-dom';

const Logout = () => {
  localStorage.removeItem("login");
  return <Navigate to="/main" />
}

export default Logout;