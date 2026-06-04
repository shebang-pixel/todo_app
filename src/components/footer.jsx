import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" style={{ padding: '1rem', marginTop: 'auto' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                &copy; {new Date().getFullYear()} Todo App 
            </p>
        </footer>
    );
};

export default Footer;