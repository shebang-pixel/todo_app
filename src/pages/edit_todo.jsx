import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

const EditTodo = () => {
    const [entryName, setEntryName] = useState('');
    const [entryBody, setEntryBody] = useState('');

    const handleSave = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Date.now(),
            name: entryName,
            body: entryBody,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        const existingTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        localStorage.setItem('todos', JSON.stringify([...existingTodos, newTodo]));

        alert('Todo saved successfully!');
        setEntryName('');
        setEntryBody('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                <main id="center" style={{ flex: 1, textAlign: 'left', padding: '0 2rem' }}>
                    <h1>Edit Todo</h1>
                    <form onSubmit={handleSave} style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="entryName" style={{ color: 'var(--text-h)', fontWeight: 'bold' }}>Entry Name</label>
                            <input 
                                type="text" 
                                id="entryName" 
                                value={entryName} 
                                onChange={(e) => setEntryName(e.target.value)} 
                                placeholder="What needs to be done?"
                                style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '1rem' }}
                                required
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="entryBody" style={{ color: 'var(--text-h)', fontWeight: 'bold' }}>Entry Body</label>
                            <textarea 
                                id="entryBody" 
                                value={entryBody} 
                                onChange={(e) => setEntryBody(e.target.value)} 
                                placeholder="Add more details about this task..."
                                rows={6}
                                style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '1rem', resize: 'vertical' }}
                            />
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <button type="submit" className="counter" style={{ margin: 0, cursor: 'pointer', padding: '0.8rem 2rem' }}>
                                Save Todo
                            </button>
                        </div>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default EditTodo;

//