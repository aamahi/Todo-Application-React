import Task from "./Task.jsx";

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div>
            {tasks.map((task) =>
                (<Task onToggle={onToggle} onDelete={onDelete} task={task} key={task.id}/>)
            )}
        </div>
    )
}
export default Tasks;
