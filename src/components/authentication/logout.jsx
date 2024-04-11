import { Navigate } from 'react-router-dom';

const Logout = () => {
  localStorage.removeItem("access_token")
  localStorage.removeItem("refresh_token")
  return <Navigate to="/main" />
}

export default Logout;