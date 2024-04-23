import cls from "./Task.module.scss"
import Delete from "../../assets/delete.svg"
import { CheckBox } from "components/UIkit/CheckBox"
import { ChangeEvent, useState } from "react"
import { Button, ThemeButton } from "components/UIkit/Button"
import classNames from "classnames"

export const Task = () => {
    const [completed, setCompleted] = useState(false)
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
        <div className={cls.Task} onMouseOver={handlerMouseOver} onMouseLeave={handlerMouseLeave}>
            <div className={cls.firstWrap}>
                <CheckBox 
                    type="checkbox"
                    onChange={handlerCheckBoxChange}
                />
                <div className={cls.TaskText}>
                    jhgjgj kjhjkhjkh hjghg hjghg gyuyg 
                </div>
            </div>
            
            <Button theme={ThemeButton.CLEAR} className={classNames(cls.Delete, {[cls.hidden]: !mouseOver})}>
                <Delete />
            </Button>
        </div>
        
    )
}
