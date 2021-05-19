import { useState } from 'react'
const Tasks = () => {
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
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
