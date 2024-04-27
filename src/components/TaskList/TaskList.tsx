import { Task } from "components/Task"
import cls from "./TaskList.module.scss"
import { useContext } from "react"
import { TasksContext } from "components/TaskProvider/TasksContext"

export const TaskList = () => {
    const { tasks } = useContext(TasksContext)
    
    return (
        <div className={cls.TaskList}>
            { tasks.map(task => <Task key={task.id} task={task} />) }
        </div>
    )
}
