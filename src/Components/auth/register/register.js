import '../login/login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const REGISTER = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        navigate('/login');
        // Handle registration logic here (e.g., make an API request)
    };
    return (
        <>
            <div className="container">
                <div className="form-container">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default REGISTER;