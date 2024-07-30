
import React, { useState } from 'react';

import DeleteItem from './DeleteItem';
import EditItem from './EditItem';

function TodoList({ items, onEdit, onDelete }) {
    const [sortConfig, setSortConfig] = useState({ key: 'dueDate', direction: 'ascending' });
    const [editItem, setEditItem] = useState(null);

    const sortedItems = [...items].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => requestSort('title')}>Title</th>
                        <th onClick={() => requestSort('dueDate')}>Due Date</th>
                        <th onClick={() => requestSort('priority')}>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.dueDate ? item.dueDate.toLocaleDateString() : 'No Date'}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button onClick={() => setEditItem(item)}>Edit</button>
                                <DeleteItem item={item} onDelete={onDelete} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editItem && (
                <EditItem
                    item={editItem}
                    onEdit={(editedItem) => {
                        onEdit(editedItem);
                        setEditItem(null);
                    }}
                    onCancel={() => setEditItem(null)}
                />
            )}
        </div>
    );
}

export default TodoList;
