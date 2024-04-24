import classNames from "classnames"
import cls from "./Button.module.scss"
import { ButtonHTMLAttributes, FC } from "react"

export enum ThemeButton {
    CLEAR = "clear"
}

interface ButtonProops extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button:FC<ButtonProops> = (props) => {
    const {
        className, 
        children,
        theme,
        onClick,
        ...otherProops
    } = props

    return (
       <button 
            className={classNames(cls.Button, {[cls.clear]: theme === ThemeButton.CLEAR }, className)}
            {...otherProops}
            onClick={onClick}
       >
            {children}
       </button>
    )
}
