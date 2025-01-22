// src/components/HeaderFooter.js
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Urban<span style={{color: "pink"}}>Retreat</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Footer.js
// Footer.js

// Footer.js





const Footer = () => {
  return (
    <footer style={{ width: '100%', backgroundColor: '#3f51b5', padding: '1rem', textAlign: 'center', color: 'white', position: 'fixed', bottom: 0 }}>
      <p>© 2025 Your Company Name. All Rights Reserved.</p>
      <div>
        <a href="#!" style={{ color: 'white', margin: '0 1rem' }}>About Us</a>
        <a href="#!" style={{ color: 'white', margin: '0 1rem' }}>Products</a>
        <a href="#!" style={{ color: 'white', margin: '0 1rem' }}>Contact</a>
      </div>
    </footer>
  );
}











export { Header,Footer };
