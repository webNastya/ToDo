import classNames from "classnames"
import cls from "./Input.module.scss"
import { FC, InputHTMLAttributes } from "react"

interface InputProops extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const Input:FC<InputProops> = (props) => {
    const { className, placeholder } = props

    return (
        <input placeholder={placeholder} className={classNames(cls.Input, className)} />
    )
}
