// import React, { useState, useEffect } from 'react';
// import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid, InputLabel } from '@mui/material';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// function EditItem({ item, onEdit, onCancel, open }) {
//     const [editedItem, setEditedItem] = useState(item);

//     useEffect(() => {
//         setEditedItem(item);
//     }, [item]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEditedItem(prevItem => ({ ...prevItem, [name]: value }));
//     };

//     const handleDateChange = (date) => {
//         setEditedItem(prevItem => ({ ...prevItem, dueDate: date }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onEdit(editedItem); // Call onEdit with the updated item
//     };

//     return (
//         <Dialog open={open} onClose={onCancel} fullWidth>
//             <DialogTitle>Edit Task</DialogTitle>
//             <DialogContent>
//                 <form id="edit-form" onSubmit={handleSubmit}>
//                     <Grid container spacing={2} alignItems="center">
//                         <Grid item xs={2}>
//                             <InputLabel htmlFor="title">Task</InputLabel>
//                         </Grid>
//                         <Grid item xs={10}>
//                             <TextField
//                                 id="title"
//                                 name="title"
//                                 value={editedItem.title}
//                                 onChange={handleChange}
//                                 variant="outlined"
//                                 fullWidth
//                                 required
//                             />
//                         </Grid>
//                     </Grid>
//                     <Grid container spacing={2} alignItems="center" style={{ marginTop: 16 }}>
//                         <Grid item xs={2}>
//                             <InputLabel htmlFor="dueDate">Due Date</InputLabel>
//                         </Grid>
//                         <Grid item xs={10}>
//                             <DatePicker
//                                 id="dueDate"
//                                 selected={editedItem.dueDate}
//                                 onChange={handleDateChange}
//                                 dateFormat="MMMM d, yyyy"
//                                 placeholderText="Select a due date"
//                                 customInput={<TextField variant="outlined" fullWidth />}
//                             />
//                         </Grid>
//                     </Grid>
//                     <FormControl component="fieldset" style={{ marginTop: 16 }}>
//                         <FormLabel component="legend">Priority</FormLabel>
//                         <RadioGroup row name="priority" value={editedItem.priority} onChange={handleChange}>
//                             <FormControlLabel value="low" control={<Radio />} label="Low" />
//                             <FormControlLabel value="medium" control={<Radio />} label="Medium" />
//                             <FormControlLabel value="high" control={<Radio />} label="High" />
//                         </RadioGroup>
//                     </FormControl>

//                 </form>
//             </DialogContent>
//             <DialogActions>
//                 <Button type="submit" form="edit-form" variant="contained" color="primary">Save Changes</Button>
//                 <Button onClick={onCancel} color="secondary">Cancel</Button>
//             </DialogActions>
//         </Dialog>
//     );
// }

// export default EditItem;
import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid, InputLabel } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EditItem({ item, onEdit, onCancel, open }) {
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
        <Dialog open={open} onClose={onCancel} fullWidth>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogContent>
                <form id="edit-form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* Task Field */}
                        <Grid item xs={12}>
                            <InputLabel htmlFor="title">Task</InputLabel>
                            <TextField
                                id="title"
                                name="title"
                                value={editedItem.title}
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
                                        selected={editedItem.dueDate}
                                        onChange={handleDateChange}
                                        dateFormat="MMMM d, yyyy"
                                        placeholderText="Select a due date"
                                        customInput={<TextField variant="outlined" fullWidth />}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl component="fieldset" fullWidth>
                                        <FormLabel component="legend">Priority</FormLabel>
                                        <RadioGroup row name="priority" value={editedItem.priority} onChange={handleChange}>
                                            <FormControlLabel value="low" control={<Radio />} label="Low" />
                                            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                                            <FormControlLabel value="high" control={<Radio />} label="High" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>

                        
                        <Grid item xs={12} style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button type="submit" variant="contained" color="primary">Save Changes</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
                <Button type="button" onClick={onCancel} color="secondary">Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditItem;
