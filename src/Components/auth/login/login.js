import React, { useState } from 'react';
import './login.css'; // Import CSS for Login component
import { useNavigate } from 'react-router-dom';

const LOGIN = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        if (localStorage.getItem('email', email) === email && password === localStorage.getItem('password', password)) {
            navigate('/home');
        }
    };
    return (
        <>
            <div className="container">
                <div className="form-container">
                    <h2>Login</h2>
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
                        <div className="button-container">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div></>
    );
};

export default LOGIN;