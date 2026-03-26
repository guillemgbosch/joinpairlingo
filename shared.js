// Sidebar component
// Persistent sidebar for (joinpairlingo) project

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Join Pair Lingo</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;

// Shared Utilities
// Shared utility functions for joinpairlingo project

export const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
};

export const calculateScore = (correctAnswers, totalQuestions) => {
    return (correctAnswers / totalQuestions) * 100; // Returns score as a percentage
};