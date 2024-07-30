import React, {useState} from 'react'

function addTask({addTask}) {
    // taskName & taskDescription state is defined to get the values
    let [taskName, setTaskame] = useState('')
    let [taskDescription, setTaskDescription] = useState('')

    // handleAddTask function is used to handle the form submission
    let handleAddTask = (e)=>{
        // prevents default form submission
        e.preventDefault();
        // check condition taskName and TaskDescription is present 
        if(taskName && taskDescription){
            let newTask = {
                name: taskName,
                description:taskDescription,
                status: 'not completed'
            };
            // adds the new value to the array
            addTask(newTask);
            // then sets the taskName & taskDescription to null after form submission
            setTaskame('');
            setTaskDescription('');
        }
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleAddTask}>
                    <div className="row form-content-wrap align-items-center">
                        <div className="col-md-5 mb-3">
                            <input
                                type="text"
                                className="form-control todoName"
                                id="todoName"
                                placeholder="Todo Name"
                                value={taskName}
                                onChange={(e)=>setTaskame(e.target.value)}
                            />
                        </div>
                        <div className="col-md-5 mb-3">
                            <input
                                type="text"
                                className="form-control todoDescription"
                                id="todoDescription"
                                placeholder="Todo Description"
                                value={taskDescription}
                                onChange={(e)=>setTaskDescription(e.target.value)}
                            />
                        </div>
                        <div className="col-md-2 mb-3">
                            <button type="submit" className="btn btn-success">Add Todo</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default addTask