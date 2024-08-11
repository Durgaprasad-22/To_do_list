import React, { useState } from 'react';
import './App.css'; // Assuming you have the CSS file in the same directory

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleTaskChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const moveTaskUp = (index) => {
        if (index === 0) return; // If it's the first item, do nothing
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index - 1];
        updatedTasks[index - 1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTasks(updatedTasks);
    };

    const moveTaskDown = (index) => {
        if (index === tasks.length - 1) return; // If it's the last item, do nothing
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index + 1];
        updatedTasks[index + 1] = updatedTasks[index];
        updatedTasks[index] = temp;
        setTasks(updatedTasks);
    };

    return (
        <div className='to-do-list'>
            <h2>To Do List</h2>
            <input
                type="text"
                placeholder='Enter new task...'
                value={newTask}
                onChange={handleTaskChange}
            />
            <button onClick={addTask} className='add-btn'>Add</button>

            <div className="tasks">
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button onClick={() => deleteTask(index)} id="del">Delete</button>
                            <button onClick={() => moveTaskUp(index)} id="move-up">Up</button>
                            <button onClick={() => moveTaskDown(index)} id='move-down'>Down</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default ToDoList;
