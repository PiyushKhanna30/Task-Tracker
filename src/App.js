import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id!=id));
  }
  return (
    <div className="App">
      <Header title="Piyush" />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
