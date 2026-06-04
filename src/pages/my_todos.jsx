import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, Toaster } from 'sonner';
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
        const todo = todos.find(t => t.id === id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        
        if (!todo.completed) {
            toast.success('Task marked as completed');
        }
    };

    const handleDelete = (id) => {
        // Optimistic UI: Update state immediately
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        
        // Persist change
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        toast.error('Task permanently deleted');
    };

    const handleEdit = (todo) => {
        console.log('Edit todo:', todo);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[var(--bg)]">
            <Toaster position="bottom-right" richColors />
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <main id="center" className="flex-1 text-left px-6 lg:px-12 py-8">
                    <div className="flex items-center gap-3 mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 lg:w-10 lg:h-10 text-[var(--accent)]">
                            <rect width="18" height="18" x="3" y="3" rx="2"/>
                            <path d="m9 11 3 3L22 4"/>
                        </svg>
                        <h1 className="my-0">My Todos</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <AnimatePresence mode="popLayout">
                        {todos.length > 0 ? (
                            todos.map(todo => (
                                <motion.div
                                    key={todo.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <TodoCard 
                                        todo={todo} 
                                        onToggle={handleToggle} 
                                        onDelete={handleDelete} 
                                        onEdit={handleEdit} 
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center py-24 text-center"
                            >
                                <div className="w-24 h-24 mb-6 text-[var(--accent)] opacity-20">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3m0 0h3m-3 0v3m0-3V9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-medium text-[var(--text-h)]">No tasks found</h2>
                                <p className="text-[var(--text)] max-w-sm mt-3 leading-relaxed">
                                    Your workspace is clear. Use the action panel to create a new entry and start your journey.
                                </p>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                </main>
            </div> 
            <Footer />
        </div>
    );
};

export default MyTodos;

//