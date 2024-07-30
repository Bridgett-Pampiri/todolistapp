

import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TodoList from './TodoList';
import AddItem from './AddItem';
import EditItem from './EditItem';

function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [open, setOpen] = useState(false);

  const addItem = (item) => {
    item.id = new Date().toISOString();
    setItems([...items, item]);
  };

  const handleEdit = (updatedItem) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    ));
    handleClose();
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEditOpen = (item) => {
    setEditItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditItem(null);
  };

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Task Planner
      </Typography>
      <AddItem onAdd={addItem} />
      <TodoList items={items} onEdit={handleEditOpen} onDelete={deleteItem} />
      {editItem && (
        <EditItem
          item={editItem}
          onEdit={handleEdit}
          onCancel={handleClose}
          open={open}
        />
      )}
    </Container>
  );
}

export default App;
