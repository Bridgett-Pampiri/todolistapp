import React, { useState } from 'react';
import './App.css';
import AddItem from './AddItem';
import TodoList from './TodoList';


// function App() {
//   const [todos, setTodos] = useState([]);

//   const addItem = ({ text, dueDate, priority }) => {
//     const newTodo = { text, dueDate, priority, id: Date.now() };
//     setTodos([...todos, newTodo]);
//   };

//   const removeItem = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <AddItem addItem={addItem} />
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id} className={`priority-${todo.priority}`}>
//             {todo.text} 
//             {todo.dueDate && ` (Due: ${new Date(todo.dueDate).toLocaleDateString()})`}
//             <div className="priority-bar">
//               <span className={`dot ${todo.priority}-dot`} />
//             </div>
//             <button onClick={() => removeItem(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
      item.id = new Date().toISOString();
      setItems([...items, item]);
  };

  const editItem = (editedItem) => {
      setItems(items.map(item => (item.id === editedItem.id ? editedItem : item)));
  };

  const deleteItem = (id) => {
      setItems(items.filter(item => item.id !== id));
  };

  return (
      <div className="App">
          <h1>Todo List</h1>
          <AddItem onAdd={addItem} />
          <TodoList items={items} onEdit={editItem} onDelete={deleteItem} />
      </div>
  );
}

export default App;