import { useContext, useState } from "react";
import { createTask, deleteTask, getTask, getTasks, updateDone, updateTask } from '../Api/tasks.api'
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
            console.error('salio mal obtener tareas');
        }
    }

    //one task
    const getOneTask = async (id) => {
        try {
            const data = await getTask(id);
            return data
        } catch (error) {
            console.error('salio mal obtener una tarea');
        }
    }

    //create task
    const createOneTask = async (task) => {
        try {
            const res = await createTask(task);
        } catch (error) {
            console.error('salio mal crear tarea');
        }
    }

        //update task
        const updateOneTask = async (id, task) => {
            try {
                const res = await updateTask(id, task);
            } catch (error) {
                console.error('salio mal actualizar');
            }
        }
        //update done
        const updateOneDone= async (id, done) => {
            try {
                const res = await updateDone(id, done);
                setTasks(
                    tasks.map(t => (t.id === id ? {...t, done: !t.done} : t))
                    )
            } catch (error) {
                console.error('salio mal actualizar el done');
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


    return <TaskContext.Provider value={{ tasks, getListTasks, deleteOneTask, createOneTask, getOneTask, updateOneTask, updateOneDone }}>
        {children}
    </TaskContext.Provider>
}