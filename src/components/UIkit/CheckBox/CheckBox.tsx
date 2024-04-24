import classNames from "classnames"
import cls from "./CheckBox.module.scss"
import { FC, InputHTMLAttributes } from "react"

interface CheckBoxProops extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const CheckBox:FC<CheckBoxProops> = (props) => {
    const { className, type, onChange, defaultChecked } = props

    return (
        <input 
            type={type}
            onChange={onChange}
            className={classNames(cls.CheckBox, className)}
            defaultChecked
        />
    )
}
