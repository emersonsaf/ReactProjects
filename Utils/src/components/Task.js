import { FaTimes } from 'react-icons/fa'

export const Task = ({ task, onDelete, onTonggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''} `} onDoubleClick={() => onTonggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes
                    onClick={() =>onDelete(task.id)}
                    style={{ color: 'red', cursor: 'pointer' }}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
