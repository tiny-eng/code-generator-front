import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
};

export default SignUp;