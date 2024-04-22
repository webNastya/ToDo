import classNames from "classnames"
import cls from "./ThemeToggle.module.scss"
import Dark from "assets/dark.svg"
import Light from "assets/light.svg"
import { Button, ThemeButton } from "components/UIkit/Button"
import { Theme, useTheme } from "components/ThemeProvider"

interface ThemeToggleProops {
    className?: string
}

export const ThemeToggle = ({className}: ThemeToggleProops) => {
    const{ theme, toggleTheme } = useTheme()

    return (
        <Button 
            className={classNames(cls.ThemeToggle, className)}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            { theme === Theme.DARK 
            ? <Dark className={cls.svg}/> 
            : <Light className={cls.svg}/>}
            
        </Button>
    )
}
