import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

const TodoDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        const foundTodo = storedTodos.find(t => t.id.toString() === id);
        if (foundTodo) {
            setTodo(foundTodo);
        }
    }, [id]);

    if (!todo) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <div style={{ display: 'flex', flex: 1 }}>
                    <Sidebar />
                    <main id="center" style={{ flex: 1, padding: '2rem' }}>
                        <h1>Task Not Found</h1>
                        <button className="counter" onClick={() => navigate('/')}>Return Home</button>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                <main id="center" style={{ flex: 1, textAlign: 'left', padding: '0 2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
                        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>⬅️</button>
                        <h1 style={{ margin: 0 }}>Task Details</h1>
                    </div>
                    
                    <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--bg)', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase' }}>Title</label>
                            <h2 style={{ marginTop: '0.5rem' }}>{todo.name}</h2>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase' }}>Created At</label>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text)' }}>{todo.createdAt || 'N/A'}</p>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase' }}>Status</label>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text)' }}>
                                {todo.completed ? '✅ Completed' : '⏳ In Progress'}
                            </p>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase' }}>Description</label>
                            <p style={{ marginTop: '0.5rem', color: 'var(--text)', whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>
                                {todo.body || 'No description provided.'}
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default TodoDetail;