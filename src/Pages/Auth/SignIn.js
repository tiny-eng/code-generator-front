import React, { useState } from 'react';
import '../../Styles/Signup.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1 className="signup-title">CodeGen</h1>
        <h1 className="signup-subtitle">Don't you have an account? <a href='signup'>Sign Up</a></h1>
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
        <button type="submit" className="signup-button">
          Sign In
        </button>
        <div className="or-divider">Or</div>
        <div className="social-buttons">
            <button className="google-button">
                Sign in with Google
            </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
