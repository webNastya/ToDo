import cls from "./Task.module.scss"
import Delete from "../../assets/delete.svg"
import { CheckBox } from "components/UIkit/CheckBox"
import { ChangeEvent, FC, useState } from "react"
import { Button, ThemeButton } from "components/UIkit/Button"
import classNames from "classnames"
import { TaskType } from "./type"

interface TaskProps {
    task: TaskType
}

export const Task:FC<TaskProps> = (props) => {
    const { task } = props
    const [completed, setCompleted] = useState(task.isComplete)
    const [mouseOver, setMouseOver] = useState(false)
    
    const handlerCheckBoxChange = ({target}:ChangeEvent) => {
        const checkbox = target as HTMLInputElement;
        setCompleted(checkbox.checked)
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
                    defaultChecked={completed}
                    onChange={handlerCheckBoxChange}
                />
                <div className={cls.TaskText}>{task.text}</div>
            </div>
            
            <Button theme={ThemeButton.CLEAR} 
                className={classNames(cls.Delete, {[cls.hidden]: !mouseOver})}
            >
                <Delete />
            </Button>
        </div>
        
    )
}
