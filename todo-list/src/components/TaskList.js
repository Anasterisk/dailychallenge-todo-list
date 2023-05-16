import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, onDelete, onToggleComplete}) =>{
    return (
        <ul>
            {tasks.map((task)=>(
                <TaskItem 
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </ul>
    )
}
export default TaskList;