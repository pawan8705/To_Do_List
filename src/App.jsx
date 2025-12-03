import './App.css'
import { useState } from 'react'


const App = () => {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const Handleclick = () => {
    setTasks([...tasks, task]);
    setTask('');
  }
  const EditTasks = (e) => {
    const newTask = prompt("Enter the updated task:", tasks[e]);
    if (newTask !== null && newTask.trim() !== '') {
      const updatedTasks = tasks.map((t, index) => 
        index === e ? newTask : t
      );
      setTasks(updatedTasks);
    }
    
  }
  const DeleteTasks = (e) => {
    const filteredTasks = tasks.filter((t, index) => index !== e);
    setTasks(filteredTasks);
  }

  return (
    <div className='box'>
      <h1>To Do App</h1>
      <input
        type="text" 
        placeholder='Enter your task...' 
        value={task} 
        onChange={(e) => setTask(e.target.value)} />

      <button onClick={Handleclick}>Add Task</button>
      <hr />
      <h2>Your Tasks:</h2>
      {tasks.map((t, index) => (
        <div key={index} className='box2'>
          <span>{t}</span>
          <div>
            <button
              className='btn btn1'
              onClick={() => EditTasks(index)}
              >Edit</button>
            <button 
              className='btn btn2'
              onClick={() => DeleteTasks(index)}
              >Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App