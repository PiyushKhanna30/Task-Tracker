import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Docs are great.',
        reminder: true
      },
      {
        id: 2,
        text: 'Engineers are great.',
        reminder: true
      },
      {
        id: 3,
        text: 'Teachers are great.',
        reminder: false
      }
    ]
  )

  const addTask = (task)=>{
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])    
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id!==id));
  }

  const toggleReminder = (id)=>{
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder:!task.reminder}:task));
  }
  return (
    <div className="App">
      <Header title="Task" />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):(<h2>No tasks to show</h2>)}
      
    </div>
  );
}

export default App;
