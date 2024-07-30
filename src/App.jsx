import React, { useState } from 'react'
import AddTask from './Components/addTask'
import TodoContent from './Components/todoContent'
import EditTask from './Components/editTask'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // defined data state with empty array to store task details
  let [data, setData] = useState([]);

  // addTask function is used to add the new task value to the data array
  let addNewTask = (task) => {
    setData([...data, task])
  }

  // deleteTask function is used to delete the task and remove the value from the data array
  let deleteTask = (index) => {
    let newData = data.filter((_, i) => i !== index);
    setData(newData)
  }

  // updateTaskStatus function is used to update the task status in the data
  let updateTaskStatus = (index, status) => {
    const newData = data.map((task, i) => {
      if (i === index) {
        return { ...task, status };
      }
      return task;
    });
    setData(newData);
  };

  // updateTask function is  used to update the value in the data array
  let updateTask = (index, updatedTask) => {
    const newData = data.map((task, i) => {
      if (i === index) {
        return updatedTask;
      }
      return task;
    });
    setData(newData);
  };

  return (
    <>
    <BrowserRouter>
    <div className='container'>
        <center className='title'>MY TODO</center>
        <Routes>
          <Route path='/' element={
            <>
              <AddTask addTask={addNewTask} />
              <TodoContent details={data} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
            </>
          } />
          <Route path='/edit/:index' element={<EditTask data={data} updateTask={updateTask}/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App