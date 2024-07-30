import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// function AddItem({ Item }) {
//   const [text, setText] = useState('');
//   const [dueDate, setDueDate] = useState(null);
//   const [priority, setPriority] = useState('low'); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim()) {
//       Item({ text, dueDate, priority });
//       setText('');
//       setDueDate(null);
//       setPriority('low');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='formItem'>
//         </div><label htmlFor="item">Add item</label>
//       <input
//         type="text"
//         id="item"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Add a new activity"
//       />
      
//       <label htmlFor="dueDate">Due date</label>
//       <DatePicker
//         selected={dueDate}
//         onChange={(date) => setDueDate(date)}
//         dateFormat="MMMM d, yyyy"
//         placeholderText="Select a due date"
//       />
//       <fieldset>
//         <legend>Priority</legend>
//         <label>
//           <input
//             type="radio"
//             value="low"
//             checked={priority === 'low'}
//             onChange={() => setPriority('low')}
//           />
//           Low
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="medium"
//             checked={priority === 'medium'}
//             onChange={() => setPriority('medium')}
//           />
//           Medium
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="high"
//             checked={priority === 'high'}
//             onChange={() => setPriority('high')}
//           />
//           High
//         </label>
//       </fieldset>

//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default AddItem;


function AddItem({ onAdd }) {
    const [item, setItem] = useState({ title: '', dueDate: null, priority: 'low' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevItem => ({ ...prevItem, [name]: value }));
    };

    const handleDateChange = (date) => {
        setItem(prevItem => ({ ...prevItem, dueDate: date }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(item);  // Make sure onAdd is passed as a prop
        setItem({ title: '', dueDate: null, priority: 'low' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={item.title}
                onChange={handleChange}
                placeholder="Todo Title"
                required
            />
            <DatePicker
                selected={item.dueDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a due date"
            />
            <fieldset>
                <legend>Priority</legend>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="low"
                        checked={item.priority === 'low'}
                        onChange={handleChange}
                    />
                    Low
                </label>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="medium"
                        checked={item.priority === 'medium'}
                        onChange={handleChange}
                    />
                    Medium
                </label>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="high"
                        checked={item.priority === 'high'}
                        onChange={handleChange}
                    />
                    High
                </label>
            </fieldset>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddItem;
