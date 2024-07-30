// EditItem.js
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EditItem({ item, onEdit, onCancel }) {
    const [editedItem, setEditedItem] = useState(item);

    useEffect(() => {
        setEditedItem(item);
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem(prevItem => ({ ...prevItem, [name]: value }));
    };

    const handleDateChange = (date) => {
        setEditedItem(prevItem => ({ ...prevItem, dueDate: date }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(editedItem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={editedItem.title}
                onChange={handleChange}
                required
            />
            <DatePicker
                selected={editedItem.dueDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
            />
            <fieldset>
                <legend>Priority</legend>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="low"
                        checked={editedItem.priority === 'low'}
                        onChange={handleChange}
                    />
                    Low
                </label>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="medium"
                        checked={editedItem.priority === 'medium'}
                        onChange={handleChange}
                    />
                    Medium
                </label>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="high"
                        checked={editedItem.priority === 'high'}
                        onChange={handleChange}
                    />
                    High
                </label>
            </fieldset>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
}

export default EditItem;
