import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Nickname:', nickname);

    try {
        const response = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, nickname })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
            alert("Success: " + "Signup successful!");
            navigate('/signin');
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData.detail);
            alert("Error: " + errorData.detail);
        }
    } catch (error) {
      console.error('Network or server error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <Link to="/"><h1 className="signup-title">CodeGen</h1></Link>
        <h1 className="signup-subtitle">Already have an account? <Link to="/signin">Sign In</Link></h1>
        <h1 className="input-title">Email</h1>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <h1 className="input-title">Password</h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <h1 className="input-title">Nickname</h1>
        <input
          type="text"
          placeholder="What should we call you?"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <div className="or-divider">Or</div>
        <div className="social-buttons">
            <button className="google-button">
                Sign up with Google
            </button>
        </div>
        <div className="terms-and-privacy">
            By signing up, you agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
        </div>
      </form>
    </div>
  );
};

export default Signup;
