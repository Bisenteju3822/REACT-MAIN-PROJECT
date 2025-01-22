import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';  // Import the CSS file for custom styles

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    const savedIsSubmitted = localStorage.getItem('isSubmitted') === 'true';

    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
    if (savedPhoneNumber) setPhoneNumber(savedPhoneNumber);
    if (savedIsSubmitted) setIsSubmitted(true);
  }, []);

  const backgroundStyle = { 
    backgroundImage: 'url("pexels-masoodaslami-14388151.jpg")',
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '100vh', 
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== 'tejasavebisen@gmail.com') {
      setError('Email is incorrect');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!phoneNumber) {
      setError('Phone number is required');
    } else {
      setError('');
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('isSubmitted', true);
      setIsSubmitted(true);
    }
  };

  const handleButtonClick = () => {
    localStorage.setItem('isSubmitted', false); // Reset submission status in local storage
    setIsSubmitted(false); // Update the state to re-render the signup form
    navigate('/signup'); // Optionally navigate if you want to ensure the URL is correct
  };

  if (isSubmitted) {
    return (
      <div style={backgroundStyle} className="backgroundImage">
        <div className="signup-container">
          <h1>Signup Successful!</h1>
          <p>Your account has been created. You can now <a href="/login">log in</a>.</p>
          <button onClick={handleButtonClick} className="btn btn-secondary">Back to Sign Up</button>
        </div>
      </div>
    );
  }

  return (
    <div style={backgroundStyle} className="backgroundImage">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhoneNumber" className="form-label">Phone Number</label>
            <input 
              type="tel" 
              className="form-control" 
              id="exampleInputPhoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
