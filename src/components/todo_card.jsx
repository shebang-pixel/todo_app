import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoCard = ({ todo, onToggle, onDelete, onEdit }) => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 1.5rem',
            background: 'var(--bg)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow)',
            marginBottom: '1rem',
            gap: '1rem',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
        }}
        onClick={() => navigate(`/todo/${todo.id}`)}
        >
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={(e) => { e.stopPropagation(); onToggle(todo.id); }}
                style={{ cursor: 'pointer', width: '1.2rem', height: '1.2rem', accentColor: 'var(--accent)' }}
            />
            
            <div style={{ flex: 1, textAlign: 'left' }}>
                <h3 style={{ 
                    margin: 0, 
                    fontSize: '1.1rem', 
                    fontWeight: '500',
                    color: todo.completed ? 'var(--text)' : 'var(--text-h)',
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    opacity: todo.completed ? 0.6 : 1
                }}>
                    {todo.name}
                </h3>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                    onClick={(e) => { e.stopPropagation(); onEdit(todo); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '0.4rem', borderRadius: '6px', color: 'var(--text)' }}
                    title="Edit Task"
                >✏️</button>
                <button 
                    onClick={(e) => { e.stopPropagation(); onDelete(todo.id); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '0.4rem', borderRadius: '6px', color: '#e5484d' }}
                    title="Delete Task"
                >🗑️</button>
            </div>
        </div>
    );
};

export default TodoCard;