import { useEffect, useState } from 'react';
import { Button, Popover, Typography, TextField, Box } from '@mui/material';
import axios from 'axios';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState(null);
    const [ranking, setRanking] = useState('Unranked');
    const [usernameError, setUsernameError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (userData) {
                setUser(userData);
                const rankingResponse = await axios.post('http://localhost:5000/api/users/get-user-ranking', { email: userData.email });
                setRanking(rankingResponse.data.ranking);
            }
        };
        fetchUserData();
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSave = async () => {
        if (!user) return;

        const updatedUser = {
            email: user.email,
            username: user.username,
            cprating: user.cprating,
            userlanguage: user.userlanguage,
        };

        try {
            const usernameResponse = await axios.post('http://localhost:5000/api/users/check-username-for-update', { email: user.email, username: user.username });
            if (!usernameResponse.data.isUnique) {
                setUsernameError('Username is already taken');
                return;
            }

            const response = await axios.post('http://localhost:5000/api/users/update-user-info', updatedUser);
            setUser(response.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            handleClose(); // Close the popover after saving
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setUsernameError(''); // Reset the username error when user starts typing
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <section className="dashboard">
                <div className="dash">Your Dashboard</div>
                <section className="dashboard_design">
                    <section className="dash_section_01">
                        <div className="dash_first">
                            <div>Username: {user?.username}</div>
                            <div>CP Rating: {user?.cprating}</div>
                            <div>Fav Programming Language: {user?.userlanguage}</div>
                            <div>You are Ranked #{ranking} on ZCoder website</div>
                        </div>
                        <div className="dash_second">
                            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                                Update Profile
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Box p={2} sx={{ minWidth: 250, backgroundColor: 'rgba(168, 169, 168,0.9)' }}>
                                    <Typography variant="h6">Update Profile</Typography>
                                    <TextField
                                        label="Username"
                                        name="username"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        value={user?.username || ''}
                                        onChange={handleChange}
                                        sx={{ backgroundColor: 'rgba(250, 252, 251,1)' }}
                                        error={Boolean(usernameError)}
                                        helperText={usernameError}
                                    />
                                    <TextField
                                        label="CP Rating"
                                        name="cprating"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        value={user?.cprating || ''}
                                        onChange={handleChange}
                                        sx={{ backgroundColor: 'rgba(250, 252, 251,1)' }}
                                    />
                                    <TextField
                                        label="Fav Programming Language"
                                        name="userlanguage"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        value={user?.userlanguage || ''}
                                        onChange={handleChange}
                                        sx={{ backgroundColor: 'rgba(250, 252, 251,1)' }}
                                    />
                                    <Button variant="contained" onClick={handleSave}>Save</Button>
                                </Box>
                            </Popover>
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
}
