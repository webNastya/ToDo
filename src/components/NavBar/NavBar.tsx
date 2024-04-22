import classNames from "classnames"
import cls from "./NavBar.module.scss"
import { ThemeToggle } from "components/ThemeToggle"
import { AppLink } from "components/UIkit/AppLink"

interface NavBarProops {
    className?: string
}

export const NavBar = ({className}: NavBarProops) => {
    return (
        <div className={classNames(cls.NavBar, className)}>
            <AppLink to={'/'} className={cls.firstLink}>Главная</AppLink>
            <AppLink to={'/about'}>О сайте</AppLink>
            <ThemeToggle/>
        </div>
    )
}
