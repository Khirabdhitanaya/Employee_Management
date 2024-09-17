import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();
    const userName = localStorage.getItem('userName');

    const handleLogout = () => {
        localStorage.removeItem('userName');
        history.push('/');
    };

    return (
        <div>
            <h1>Welcome Admin Panel</h1>
            <h2>{`Welcome ${userName}`}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
