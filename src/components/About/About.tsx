import cls from "./About.module.scss"

export const About = () => {
    return(
        <div>
            <div className={cls.title}>Данный To Do List осуществлён при помощи</div>
            <ul className={cls.ul}>
                <li>React</li>
                    <ul className={cls.ul}>
                        <li>useState</li>
                        <li>useContext</li>
                        <li>useMemo</li>
                    </ul>
                <li>TypeSkript</li>
                <li>webpack</li>
                <li>SCSS и CSS переменных</li>
                <li>Разбиения архитектуры на компоненты</li>
            </ul>
            <div className={cls.title}>Были реализованы:</div>
            <ul className={cls.ul}>
                <li>Добавление задачи по кнопке "Добавить" или Enter на клавиатуре</li>
                <li>Удаление задачи по кнопке "х" </li>
                <li>Сохранение задач и их изменений (выполнена или удалена) в localStorage</li>
                <li>Дизайн светлой и тёмной темы</li>
            </ul>
            <br/>
            <a 
                className={cls.a} 
                href="https://github.com/webNastya/ToDo"
            >GitHub</a>
        </div>
    )
}
