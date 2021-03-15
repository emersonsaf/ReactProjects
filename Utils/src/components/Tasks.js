import { Task } from "./Task";

const Tasks = ({tasks, onDelete, onTonggle}) => {
    return (
        <>
            {
            tasks.map( (task, index) => (
            <Task 
                id={index} 
                task={task}
                onDelete={onDelete}
                onTonggle={onTonggle}
            />
            ))
            }
        </>
    )
}
export default Tasks;