import { useContext, useState } from "react";
import { createTask, deleteTask, getTask, getTasks, updateDone, updateTask } from '../Api/tasks.api'
import { TaskContext } from "./TaskContext";
import Swal from 'sweetalert2';

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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Task creada correctamente',
                showConfirmButton: false,
                timer: 1500
              })
        } catch (error) {
            console.error('salio mal crear tarea');
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Task no fue creada rechazada',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

        //update task
        const updateOneTask = async (id, task) => {
            try {

                const res = await updateTask(id, task);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Task Editada correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } catch (error) {
                console.error('salio mal actualizar');
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Task no fue editada',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        }
        //update done
        const updateOneDone= async (id, done) => {
            try {

                const res = await updateDone(id, done);
                setTasks(
                    tasks.map(t => (t.id === id ? {...t, done: !t.done} : t))
                    )
                    console.error('actualizar el done');
            } catch (error) {
                console.error('salio mal actualizar el done');
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Check task rechazada',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        }

    //delete task
    const deleteOneTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(t => t.id !== id));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Task eliminada',
                showConfirmButton: false,
                timer: 1000
              })
        } catch (error) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Task no fue eliminada',
                showConfirmButton: false,
                timer: 1000
              })
            console.error(error);
        }
    }


    return <TaskContext.Provider value={{ tasks, getListTasks, deleteOneTask, createOneTask, getOneTask, updateOneTask, updateOneDone }}>
        {children}
    </TaskContext.Provider>
}