import { TaskType } from "components/Task/type";
import { createContext } from "react";


export interface TaskContextProps {
    tasks?: TaskType[];
    setTasks?: (tasks: TaskType[]) => void;
}

export const TasksContext = createContext<TaskContextProps>({})

export const LOCAL_STORAGE_TASKS_KEY = "tasks"
