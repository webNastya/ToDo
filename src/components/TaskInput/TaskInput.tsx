import { TasksContext } from "components/TaskProvider/TasksContext"
import cls from "./TaskInput.module.scss"
import { Button } from "components/UIkit/Button"
import { Input } from "components/UIkit/Input"
import { ChangeEvent, KeyboardEvent, useCallback, useContext, useState } from "react"

export const TaskInput = () => {
    const { tasks, setTasks } = useContext(TasksContext)
    const [task, setTask] = useState("")

    const handlerTaskAdd = () => {
        console.log(task);
        setTasks([{id:1, text: task, isComplete: false}])
    }

    const handlerTaskInput = (e:ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handlerInputKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter")
            handlerTaskAdd()
    }

    return (
        <div className={cls.TaskInput}>
            <Input 
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
