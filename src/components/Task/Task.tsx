import cls from "./Task.module.scss"
import Delete from "../../assets/delete.svg"
import { CheckBox } from "components/UIkit/CheckBox"
import { ChangeEvent, FC, useContext, useState } from "react"
import { Button, ThemeButton } from "components/UIkit/Button"
import classNames from "classnames"
import { TaskType } from "./type"
import { TasksContext } from "components/TaskProvider/TasksContext"

interface TaskProps {
    task: TaskType
}

export const Task:FC<TaskProps> = (props) => {
    const { task } = props
    const [ mouseOver, setMouseOver ] = useState(false)
    const { tasks, setTasks } = useContext(TasksContext)
    
    
    const handlerCheckBoxChange = ({target}:ChangeEvent) => {
        const checkbox = target as HTMLInputElement;
        setTasks(tasks.map(t => t.id !== task.id ? t : {...t, isComplete: !t.isComplete}))
    }

    const handlerDelete = () => {
        
    }

    const handlerMouseOver = () => {
        setMouseOver(true)
    }
    const handlerMouseLeave = () => {
        setMouseOver(false)
    }
    
    return (
        <div 
            className={cls.Task} 
            onMouseOver={handlerMouseOver} 
            onMouseLeave={handlerMouseLeave}
        >
            <div className={cls.firstWrap}>
                <CheckBox
                    type="checkbox"
                    defaultChecked={task.isComplete}
                    onChange={handlerCheckBoxChange}
                />
                <div className={cls.TaskText}>{task.text}</div>
            </div>
            
            <Button theme={ThemeButton.CLEAR} 
                className={classNames(cls.Delete, {[cls.hidden]: !mouseOver})}
            >
                <Delete onClick={handlerDelete}/>
            </Button>
        </div>
        
    )
}
