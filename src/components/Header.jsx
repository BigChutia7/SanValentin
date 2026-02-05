import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Stars } from 'lucide-react';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav-container container">
                <NavLink
                    to="/san-valentin"
                    className={({ isActive }) => `nav-link valentin ${isActive ? 'active' : ''}`}
                >
                    <Heart className="nav-icon" size={20} fill={window.location.pathname.includes('san-valentin') ? "currentColor" : "none"} />
                    San Valentín
                </NavLink>

                <NavLink
                    to="/1-ano"
                    className={({ isActive }) => `nav-link anniversary ${isActive ? 'active' : ''}`}
                >
                    <Stars className="nav-icon" size={20} />
                    1 Año
                </NavLink>
            </nav>
        </header>
    );
}
