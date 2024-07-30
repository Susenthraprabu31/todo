import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

function cards({data, indexValue, deleteTask, updateTaskStatus}) {

    // created bgColor useState to set the background color
    let [bgColor, setBgColor] = useState('');

    // useEffect hook is defined to update the bgColor state when status value is changed
    useEffect(() => {
        if(data.status === 'completed') {
            setBgColor("green");
        }else{
            setBgColor("#d77b7b");
        }
    }, [data.status]);

    // handleChange function is used to handle task status when updated
    let handleChange = (e) => {
        let status = e.target.value;
        if(status){
            // calls updateTaskstatus function from App.jsx through probs and updates the tasks in data array
            updateTaskStatus(indexValue, status);
            if(status === 'completed'){
                setBgColor("green")
            }else{
                setBgColor("#d77b7b");
            }
        }
        
    }

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <p className='card-text'>{`Name: ${data.name}`}</p>
                    <p className="card-text">{`Description: ${data.description}`}</p>

                    <div className='card-status'>
                        <label htmlFor="status" className='status-label'>Status:</label>
                        <select name="status" id="status" value={data.status} onChange={handleChange} style={{backgroundColor: bgColor}}>
                            <option value="not completed">Not Completed</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className='d-flex justify-content-end mt-3'>
                        <button className='btn btn-success edit mr-2'><NavLink to={`/edit/${indexValue}`} className="card-link edit-link">Edit</NavLink></button>
                        <button className='btn btn-danger delete'><a href="#" className="card-link delete-link" onClick={() => deleteTask(indexValue)}>Delete</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cards