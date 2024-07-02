import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [cprating, setRating] = useState("");
    const [userlanguage, setLanguage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        const value = event.target.value.replace(/\s/g, '');
        setUsername(value);
    };

    async function signUp() {
        try {
            const checkUsernameResult = await fetch('http://localhost:5000/api/users/check-username', {
                method: 'POST',
                body: JSON.stringify({ username }),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            const checkUsernameResponse = await checkUsernameResult.json();

            if (!checkUsernameResponse.isUnique) {
                setError("Username is already taken.");
                return;
            }

            const item = { name, email, password, username, cprating, userlanguage };

            let result = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });

            result = await result.json();
            if (result.error) {
                setError(result.details || "Error registering user");
                return;
            }
            localStorage.setItem("storage-name", JSON.stringify(result.user));
            navigate("/home");
        } catch (error) {
            setError("Error registering user");
        }
    }

    return (
        <>
            <div className="home_button"><a href="/">Back</a></div>
            <div className="new_css">
                <div className="form">
                    <h1 className="heading">Register</h1>
                    {error && <div className="error">{error}</div>}
                    <input style={{textTransform:'capitalize'}} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" autoComplete="on" className="name" required />
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="on" className="email" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="off" className="password" required />
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" autoComplete="off" className="userName" required />
                    <input type="text" value={cprating} onChange={(e) => setRating(e.target.value)} placeholder="CP Rating" autoComplete="off" className="CPRating" />
                    <input type="text" value={userlanguage} onChange={(e) => setLanguage(e.target.value)} placeholder="Fav Language" autoComplete="off" className="CPRating" />
                    <button className="submit-btn" onClick={signUp}>Register</button>
                    <a href="login" className="link">Already have an account? Login</a>
                </div>
            </div>
        </>
    );
}
