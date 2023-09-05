import Header from './components/Header';
import Tasks from "./components/Tasks.jsx";
import {useEffect, useState} from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import AddForm from "./components/AddFrom.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";

const App = ()=> {
    const [tasks, setTasks] = useState([]);

    const title = 'Todo Application';
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
        setTasks(tasks.filter((task) => task.id !== id));
    }
    const fetchTask = async(id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        return await res.json();
    }
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(updTask),
        });
        const data = await res.json();

        setTasks(tasks.map((task) => {
            return task.id === id ? {...task, reminder: data.reminder} : task;
        }))
    }
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(task),
        });
        const data = await res.json();
        setTasks([...tasks, data]);

        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = {id, ...task};
        // setTasks([...tasks, newTask]);
    }
    const [showAddTask, showAddTaskState] = useState(false);

    useEffect(() => {
        const getTasks = async() => {
            const taskFromServer = await fetchTasks();
            setTasks(taskFromServer);
        }
        getTasks();
    },[]);
    const fetchTasks = async() => {
        const res = await fetch('http://localhost:5000/tasks');
        return await res.json();
    }

    return (
        <Router>
        <div className="container">
            <Header
                onAdd={()=> {
                    showAddTaskState(!showAddTask);}
                }
                title={title}
                showAddTask={showAddTask}/>

            {showAddTask && <AddForm addTask={addTask}/>}

            {tasks.length > 0 ? <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}/> : 'No Tasks Fond!!'}
            <Footer/>
        </div>
        </Router>

    )
}
export default App
