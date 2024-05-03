import { TasksContext } from "components/TaskProvider/TasksContext"
import cls from "./TaskInput.module.scss"
import { Button } from "components/UIkit/Button"
import { Input } from "components/UIkit/Input"
import { ChangeEvent, KeyboardEvent, useContext, useState } from "react"
 

export const TaskInput = () => {
    const { tasks, setTasks } = useContext(TasksContext)
    const [taskText, setTaskText] = useState("")

    const handlerTaskAdd = () => {
        const maxId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 0
        const newTasks = [{id:maxId, text:taskText, isComplete:false}, ...tasks]
        setTasks(newTasks)
        setTaskText("")
    }

    const handlerTaskInput = (e:ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value)
    }

    const handlerInputKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter")
            handlerTaskAdd()
    }

    return (
        <div className={cls.TaskInput}>
            <Input 
                value={taskText}
                placeholder="Введите текст" 
                onChange={handlerTaskInput}
                onKeyDown={handlerInputKeyDown}
            />
            <Button 
                onClick={handlerTaskAdd}
                className={cls.Button}
            >Добавить</Button>
        </div>
    )
}
