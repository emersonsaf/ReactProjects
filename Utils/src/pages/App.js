import { useEffect, useState } from 'react';
import AddTask from '../components/AddTask';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import Footer from '../components/Footer';

const App = () => {
    const [showAddTasks, setShowAddTasks] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        const data = await res.json()
        setTasks([...tasks, data])
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        )
    }

    return (
        <>
                <Header onAdd={() => { setShowAddTasks(!showAddTasks) }} showAdd={showAddTasks} />
                {showAddTasks ? <AddTask onAdd={addTask} /> : null}
                {tasks.length > 0 ?
                    (<Tasks tasks={tasks} onDelete={deleteTask} onTonggle={toggleReminder} />)
                    : ('Sem Tarefas')
                }
                <Footer />
        </>

    )
}
export default App