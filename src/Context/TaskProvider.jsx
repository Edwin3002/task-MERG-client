import { useContext, useState } from "react";
import { createTask, deleteTask, getTask, getTasks } from '../Api/tasks.api'
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('context fallo');
    }
    return context;
}




export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    //get tasks
    const getListTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.error('salio mal');
        }
    }

    //one task
    const getOneTask = async (id) => {
        try {
            const data = await getTask(id);
            return data
        } catch (error) {
            console.error('salio mal');
        }
    }

    //create task
    const createOneTask = async (task) => {
        try {
            const res = await createTask(task);
        } catch (error) {
            console.error('salio mal');
        }
    }

    //delete task
    const deleteOneTask = async (id) => {
        try {
            await deleteTask(id);
            alert('task delete');
            setTasks(tasks.filter(t => t.id !== id));
        } catch (error) {
            alert('task no fue eliminada');
            console.error(error);
        }
    }


    return <TaskContext.Provider value={{ tasks, getListTasks, deleteOneTask, createOneTask, getOneTask }}>
        {children}
    </TaskContext.Provider>
}