import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">HOME</Link>
            <Link to="/map" state={{ fromNavigation: true }}>MAP</Link>
        </div>
    );
}

export default Navigation;