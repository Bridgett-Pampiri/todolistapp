

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Grid, InputLabel } from '@mui/material';

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
    onAdd(item);
    setItem({ title: '', dueDate: null, priority: 'low' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Task Field */}
        <Grid item xs={12}>
          <InputLabel htmlFor="title">Task</InputLabel>
          <TextField
            id="title"
            name="title"
            value={item.title}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </Grid>

        {/* Priority and Due Date Field */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel htmlFor="dueDate">Due Date</InputLabel>
              <DatePicker
                id="dueDate"
                selected={item.dueDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a due date"
                customInput={<TextField variant="outlined" fullWidth />}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Priority</FormLabel>
                <RadioGroup row name="priority" value={item.priority} onChange={handleChange}>
                  <FormControlLabel value="low" control={<Radio />} label="Low" />
                  <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                  <FormControlLabel value="high" control={<Radio />} label="High" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" color="primary">Add Task</Button>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 16 }}>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddItem;
