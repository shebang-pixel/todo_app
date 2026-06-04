import React from 'react';
import EditTodo from '../pages/edit_todo';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar" style={{ width: '250px', padding: '2rem 1rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Menu</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}>
                    <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '500' }}>📅 All Tasks</Link>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    <Link to="/" style={{ color: 'var(--text)', textDecoration: 'none' }}>⭐ Important</Link>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                    <Link to="/" style={{ color: 'var(--text)', textDecoration: 'none' }}>✅ Completed</Link>
                </li>
                <li style={{ marginBottom: '1rem' }}><Link to="/edit_todo" style={{ marginLeft: '1.5rem', textDecoration: 'none' }}>
                    <button className="counter" style={{ margin: 0, cursor: 'pointer' }}>New Todo</button>
                </Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;