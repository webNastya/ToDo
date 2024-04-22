import cls from "./TaskInput.module.scss"
import { Button } from "components/UIkit/Button"
import { Input } from "components/UIkit/Input"

export const TaskInput = () => {
    return (
        <div className={cls.TaskInput}>
            <Input placeholder="Введите текст" />
            <Button className={cls.Button}>Click</Button>
        </div>
    )
}
