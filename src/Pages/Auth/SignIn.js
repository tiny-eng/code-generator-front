import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
};

export default SignIn;