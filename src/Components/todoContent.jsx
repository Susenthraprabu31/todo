import React, { useState } from 'react'
import Cards from './cards'

function todoContent({ details, deleteTask, updateTaskStatus }) {
    
    // defined filter useState for  filter option
    let [filter, setFilter] = useState('all');

    // handleFilter function is used to set the filter value of user selected                                                          
    let handleFilter = (e) => {
        let filteredValue = e.target.value;
        setFilter(filteredValue);
    };

    // renderedFilterCards function is used to filter the cards based on user selected filter value.
    let renderedFilterCards = () => {
        return details.map((item, index) => {
            if(filter === 'all'){
                return (
                    <Cards data={item} indexValue={index} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} key={index} />
                );
            }else if (filter === 'completed' &&  item.status === 'completed'){
                return(
                    <Cards data={item} indexValue={index} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} key={index} />
                );
            }else if(filter === 'not completed' && item.status === 'not completed'){
                return(
                    <Cards data={item} indexValue={index} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} key={index} />
                );
            }
        })
    }

    return (
        <>
            <div className="d-flex">
                <div className="container todo-wrap">
                    <div className='todo-content-wrap'>
                        <p className="mytoDo-bar-title">My Todos</p>
                        <label htmlFor="statusFilter" className="status-filter-lable">Status Filter:</label>
                        <select id="statusFilter" className="status-filter-select" value={filter} onChange={handleFilter}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="not completed">Not Completed</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <div className='container card-display'>
                {
                    renderedFilterCards()
                }
            </div>
        </>
    )
}

export default todoContent