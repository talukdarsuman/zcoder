import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            console.log('Submitting login request with email:', email); // Add this line

            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            console.log('Response:', response); // Add this line
            console.log('Data:', data);         // Add this line

            if (!response.ok) {
                if (response.status === 401) {
                    setError(data.error || 'Invalid email or password');
                } else {
                    setError('Something went wrong');
                }
                return;
            }

            // Handle successful login (e.g., save token, redirect to home page)
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/home');
        } catch (error) {
            console.error('Error:', error); // Add this line
            setError('Server error');
        }
    };

    return (
        <>
            <div className="home_button"><a href="/">Back</a></div>
            <div className="new_css">
                <div className="form">
                    <h1 className="heading">Login</h1>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            autoComplete="on" 
                            className="new_input" 
                            value={email} 
                            onChange={handleEmailChange} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            autoComplete="off" 
                            className="new_input" 
                            value={password} 
                            onChange={handlePasswordChange} 
                            required 
                        />
                        <button type="submit" className="submit-btn">Login</button>
                    </form>
                    <a href="register" className="link">Dont have an account? Register</a>
                </div>
            </div>
        </>
    );
}
