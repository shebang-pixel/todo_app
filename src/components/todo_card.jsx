import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';

const TodoCard = ({ todo, onToggle, onDelete, onEdit }) => {
    const navigate = useNavigate();

    return (
        <div 
            className="flex items-center p-4 px-6 bg-[var(--bg)] border border-[var(--border)] rounded-xl shadow-[var(--shadow)] gap-4 transition-all hover:border-[var(--accent-border)] hover:translate-y-[-2px] cursor-pointer group"
            onClick={() => navigate(`/todo/${todo.id}`)}
        >
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={(e) => { e.stopPropagation(); onToggle(todo.id); }}
                className="cursor-pointer w-5 h-5 accent-[var(--accent)]"
            />
            
            <div className="flex-1 text-left">
                <h3 className={`m-0 text-lg font-medium transition-all ${
                    todo.completed 
                        ? 'text-[var(--text)] line-through opacity-50' 
                        : 'text-[var(--text-h)]'
                }`}>
                    {todo.name}
                </h3>
            </div>

            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                    onClick={(e) => { e.stopPropagation(); onEdit(todo); }}
                    className="p-2 hover:bg-[var(--accent-bg)] hover:text-[var(--accent)] rounded-lg transition-colors text-[var(--text)]"
                    title="Edit Task"
                ><Pencil size={18} /></button>
                <button 
                    onClick={(e) => { e.stopPropagation(); onDelete(todo.id); }}
                    className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors text-[var(--text)]"
                    title="Delete Task"
                ><Trash2 size={18} /></button>
            </div>
        </div>
    );
};

export default TodoCard;