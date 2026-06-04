import React, { useState, useEffect } from 'react';

const Settings = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const handleClearData = () => {
        if (window.confirm("Are you sure you want to clear all data? This will remove all tasks and local settings.")) {
            localStorage.clear();
            window.location.reload();
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingBottom: '2rem' }}>
            <section>
                <h2 style={{ marginBottom: '0.5rem' }}>Appearance</h2>
                <p style={{ color: 'var(--text)', marginBottom: '1.5rem' }}>Personalize your workspace theme.</p>
                <button onClick={toggleTheme} className="counter" style={{ marginBottom: 0, cursor: 'pointer' }}>
                    {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
                </button>
            </section>

            <section>
                <h2 style={{ marginBottom: '0.5rem' }}>Data Management</h2>
                <p style={{ color: 'var(--text)', marginBottom: '1.5rem' }}>Erase all your data from this browser.</p>
                <button 
                    onClick={handleClearData}
                    style={{ 
                        padding: '0.6rem 1.2rem', 
                        backgroundColor: 'transparent', 
                        border: '1px solid #e5484d', 
                        color: '#e5484d',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500'
                    }}
                >
                    Clear All Data
                </button>
            </section>

            <section>
                <h2 style={{ marginBottom: '0.5rem' }}>User Account</h2>
                <div style={{ padding: '1.5rem', background: 'var(--accent-bg)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '400px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>JD</div>
                    <div>
                        <p style={{ fontWeight: 'bold', color: 'var(--text-h)', margin: 0 }}>John Doe</p>
                        <p style={{ fontSize: '0.85rem', margin: 0 }}>john.doe@portfolio.dev</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Settings;