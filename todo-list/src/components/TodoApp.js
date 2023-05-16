import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import TaskList from "./TaskList";


 const TodoApp = () =>{
    const [tasks,setTasks]= useState([]);
    const [taskText, setTaskText] = useState('');

    useEffect(()=>{
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks){
            setTasks(storedTasks)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('task',JSON.stringify(tasks))
    },[tasks])

    const handleAddTask =(e)=>{
        e.preventDefault();
        if(taskText.trim()!== ''){
            const newTask = {id:uuidv4(), text: taskText, completed:false}
            setTasks([...tasks, newTask])
            setTaskText('')
        }
    }

    const handleDeleteTask =(taskToDelete)=>{
        const updatedTasks = tasks.filter((task)=> task.id!==taskToDelete.id);
        setTasks(updatedTasks)
    }

    const handleToggleComplete =(taskId)=>{
        const updateTasks = tasks.map((task)=>{
            if(task.id === taskId){
                return{...task, completed:!task.completed}
            }
            return task
        })
        setTasks(updateTasks)
    }
    return (
        <div>
            <h1>Todo List</h1>
           <form onSubmit ={handleAddTask}>
            <input
                type="text"
                value={taskText}
                onChange={(e)=> setTaskText(e.target.value)}
                placeholder="Enter a task"
            />
            <button type="submit">Add Task</button>
           </form>
            <TaskList
                tasks={tasks} 
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
            />
        </div>
    )
}
export default TodoApp;