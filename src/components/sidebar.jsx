import React from 'react';
import { Link } from 'react-router-dom';
import { ListTodo, Star, CheckCircle2, Plus } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-full lg:w-[250px] p-6 lg:p-8 text-left bg-[var(--bg)] border-b lg:border-b-0 lg:border-r border-[var(--border)]">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--text)] opacity-50 mb-6">
                Menu
            </h2>
            <ul className="list-none p-0 flex flex-col gap-1">
                <li>
                    <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--accent)] bg-[var(--accent-bg)] font-medium transition-colors">
                        <ListTodo size={18} />
                        All Tasks
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--text)] hover:bg-[var(--code-bg)] transition-colors">
                        <Star size={18} />
                        Important
                    </Link>
                </li>
                <li>
                    <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--text)] hover:bg-[var(--code-bg)] transition-colors">
                        <CheckCircle2 size={18} />
                        Completed
                    </Link>
                </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <Link to="/edit_todo" className="flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--accent)] text-white rounded-xl font-medium shadow-lg shadow-purple-500/20 hover:opacity-90 transition-all active:scale-95">
                    <Plus size={18} />
                    New Todo
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;