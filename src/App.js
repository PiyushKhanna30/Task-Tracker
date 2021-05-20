import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8080/')
    const data = await res.json()
    console.log(data)
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch('http://localhost:8080/'+id)
    const data = await res.json()
    console.log(data)
    return data;
  }

  const addTask = async(task) => {
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }

    const res = await fetch('http://localhost:8080/', { 
      method: 'POST', 
      headers:{
      'Content-type':'application/json'
      },
      body:JSON.stringify(task)
   })
   const data = await res.json()
   setTasks([...tasks,data])
  }

  const deleteTask = async(id) => {
    await fetch(`http://localhost:8080/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async(id) => {
    const taskToToggle = await fetchTask(id)
    const upTask = {...taskToToggle, reminder:!taskToToggle.reminder}
    
    const res = await fetch(`http://localhost:8080/`, {
       method: 'PUT',
       headers:{
        'Content-type':'application/json'
        },
        body:JSON.stringify(upTask)
      })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
  }
  return (
    <div className="App">
      <Header title="Task" onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (<h2>No tasks to show</h2>)}

    </div>
  );
}

export default App;
