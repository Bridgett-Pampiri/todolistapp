import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

function DeleteItem({ item, onDelete }) {
    const handleDelete = () => {
        onDelete(item.id);
    };

    return (
        <button onClick={handleDelete} className="delete-btn">
        <FaTrashAlt />
    </button>
    );
}

export default DeleteItem;
