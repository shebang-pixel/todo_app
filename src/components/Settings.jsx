import React, { useState, useEffect } from 'react';
import { Moon, Sun, Trash2, User } from 'lucide-react';

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
        <div className="flex flex-col gap-10 lg:gap-12 pb-8 max-w-2xl text-left">
            <section>
                <h2 className="mb-2">Appearance</h2>
                <p className="text-[var(--text)] mb-6">Personalize your workspace theme.</p>
                <button 
                    onClick={toggleTheme} 
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--code-bg)] text-[var(--text-h)] rounded-lg font-medium border border-[var(--border)] hover:border-[var(--accent-border)] transition-colors cursor-pointer"
                >
                    {theme === 'light' ? <><Moon size={18} /> Switch to Dark</> : <><Sun size={18} /> Switch to Light</>}
                </button>
            </section>

            <section>
                <h2 className="mb-2">Data Management</h2>
                <p className="text-[var(--text)] mb-6">Erase all your data from this browser.</p>
                <button 
                    onClick={handleClearData}
                    className="flex items-center gap-2 px-4 py-2 bg-transparent border border-red-500/50 text-red-500 rounded-lg font-medium hover:bg-red-500/5 transition-colors cursor-pointer"
                >
                    <Trash2 size={18} />
                    Clear All Data
                </button>
            </section>

            <section>
                <h2 className="mb-2">User Account</h2>
                <div className="p-6 bg-[var(--accent-bg)] border border-[var(--accent-border)] rounded-2xl flex items-center gap-4 w-full sm:w-fit">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold text-lg shrink-0">JD</div>
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