import { Task } from "components/Task"
import cls from "./TaskList.module.scss"
import { useContext, useEffect } from "react"
import { LOCAL_STORAGE_TASKS_KEY, TasksContext } from "components/TaskProvider/TasksContext"

export const TaskList = () => {
    const { tasks } = useContext(TasksContext)

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
    }, [tasks])
    
    return (
        <div className={cls.TaskList}>
            { tasks.map(task => <Task key={task.id} task={task} />) }
        </div>
    )
}
