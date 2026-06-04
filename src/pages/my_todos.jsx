import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import TodoCard from '../components/todo_card';

const MyTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(storedTodos);
    }, []);

    const handleToggle = (id) => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
        }
    };

    const handleEdit = (todo) => {
        // Navigation logic for editing can be added here
        console.log('Edit todo:', todo);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                <main id="center" style={{ flex: 1, textAlign: 'left', padding: '0 2rem' }}>
                    <h1>My Todos</h1>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {todos.length > 0 ? (
                            todos.map(todo => (
                                <TodoCard 
                                    key={todo.id} 
                                    todo={todo} 
                                    onToggle={handleToggle} 
                                    onDelete={handleDelete} 
                                    onEdit={handleEdit} 
                                />
                            ))
                        ) : (
                            <p style={{ color: 'var(--text)', fontStyle: 'italic' }}>No tasks found. Click "New Todo" to get started!</p>
                        )}
                    </div>
                </main>
            </div> 
            <Footer />
        </div>
    );
};

export default MyTodos;

//