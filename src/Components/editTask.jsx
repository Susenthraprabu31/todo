import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditTask({ data, updateTask }) {
  let { index } = useParams(); // Get the index from the URL
  let taskIndex = parseInt(index);

  let navigate = useNavigate(); //To navigate to index page
  const [task, setTask] = useState({ name: '', description: '', status: '' });

  //Useeffect hook is used to update the  task state when data or task index changes 
  useEffect(() => { 
    //check if data is present and update the task accordingly
    if (data[taskIndex]) {
      setTask(data[taskIndex]);
    }
  }, [data, taskIndex]);

//   handlechamge function is used to  update the value when input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    // updates the new value with corresponding to id value
    setTask(prevTask => ({ ...prevTask, [id]: value }));
  };

//   handlesubmit function used to handle the form submit 
  const handleSubmit = (e) => {
    // prevents default data submission
    e.preventDefault();
    // updateTask function is called from props which updates the new value to the data array  in App.jsx
    updateTask(taskIndex, task);
    // Navigates to the home pages to display the todo cards with latest data
    navigate('/')
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Task Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Task Status</label>
          <select
            id="status"
            className="form-select"
            value={task.status}
            onChange={handleChange}
          >
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update Task</button>
      </form>
    </div>
  );
}

export default EditTask;