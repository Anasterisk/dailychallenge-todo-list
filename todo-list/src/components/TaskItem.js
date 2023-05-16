import React from "react";

const TaskItem = ({task, onDelete, onToggleComplete})=>{
    const handleCheckboxChange=()=>{
        onToggleComplete(task.id)
    }
    const handleDelete= ()=>{
        onDelete(task)
    }
    return (
        <li>
            
            <input 
                type='checkbox' 
                checked={task.completed}
                onChange={handleCheckboxChange}
            />
            {task.text}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default TaskItem;