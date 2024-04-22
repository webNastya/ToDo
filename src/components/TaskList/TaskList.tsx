import { Task } from "components/Task"
import cls from "./TaskList.module.scss"

export const TaskList = () => {
    return (
        <div className={cls.TaskList}>
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}
