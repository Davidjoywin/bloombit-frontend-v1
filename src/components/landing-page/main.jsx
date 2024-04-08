import { Link } from 'react-router-dom';
import Aside from '../common/aside';
import './style.css';

const Main = () => {
  return (
    <div className="container">
      <Aside />
      <div className="main-container">
        <header className="main-header">
          <div className="app-title">BloomBit</div>
          <Link to='/auth/login' className="auth-link">Login</Link>
        </header>
        <main className="main">
          <h3 className="main-head">Popular Healthcare</h3>
          <div className="main-section">
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
            <div className="section-item">health item</div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Main;
