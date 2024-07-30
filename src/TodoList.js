
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const getColor = (dueDate) => {
  const hoursLeft = (new Date(dueDate) - new Date()) / 36e5;

  if (hoursLeft < 24) return 'orange';
  if (hoursLeft < 48) return 'yellow';
  return 'inherit';
};

function TodoList({ items, onEdit, onDelete }) {
  const [sortConfig, setSortConfig] = useState({ key: 'dueDate', direction: 'ascending' });
  const theme = useTheme();  // Access the theme

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

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? <ArrowUpward /> : <ArrowDownward />;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
          <TableRow>
            <TableCell onClick={() => requestSort('title')} style={{ cursor: 'pointer' }}>
              Title {getSortIcon('title')}
            </TableCell>
            <TableCell onClick={() => requestSort('dueDate')} style={{ cursor: 'pointer' }}>
              Due Date {getSortIcon('dueDate')}
            </TableCell>
            <TableCell onClick={() => requestSort('priority')} style={{ cursor: 'pointer' }}>
              Priority {getSortIcon('priority')}
            </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedItems.map(item => (
            <TableRow key={item.id} style={{ backgroundColor: getColor(item.dueDate) }}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.dueDate ? new Date(item.dueDate).toLocaleDateString() : 'No Date'}</TableCell>
              <TableCell>{item.priority}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(item)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(item.id)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TodoList;
