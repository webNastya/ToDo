import classNames from "classnames"
import cls from "./Input.module.scss"
import { FC, InputHTMLAttributes } from "react"

interface InputProops extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const Input:FC<InputProops> = (props) => {
    const { className, placeholder, onChange, onKeyDown, value } = props

    return (
        <input 
            value={value}
            onKeyDown={onKeyDown}
            onChange={onChange} 
            placeholder={placeholder} 
            className={classNames(cls.Input, className)} 
        />
    )
}
