import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo">
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-h)', textDecoration: 'none' }}>TodoApp</Link>
            </div>
            <div className="nav-links">
                <Link to="/" style={{ marginLeft: '1.5rem', color: 'var(--text)', textDecoration: 'none' }}>Dashboard</Link>
                <Link to="/settings" style={{ marginLeft: '1.5rem', color: 'var(--text)', textDecoration: 'none' }}>Settings</Link>
                
            </div>
        </nav>
    );
};

export default Navbar;