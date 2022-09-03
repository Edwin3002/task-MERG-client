import React, { useEffect, useState } from 'react'
import { getTasks } from '../Api/tasks.api'
import { Task } from './Task'

export const TasksList = () => {

    const [tasks, setTasks] = useState([])

    const getListTasks = async () => {
        const data = await getTasks();
        setTasks(data)
    }

    const renderMain = () => {
        if (tasks.length == 0) {
            return <tr><td rowSpan={6} className='mt-6'>Empty</td></tr>
        }else{
            return tasks.map(t => (
                <Task data={t} key={t.id}/>
            ))
        }
    }

    useEffect(() => {
        getListTasks();
    }, [])


    return (
        <div>
            <h1 className='text-center text-white text-4xl font-bold my-4'>Tasks</h1>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-11/12 mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-lg text-white'>
                            <th scope="col" className="py-3 px-6">
                                TITLE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                DESCRIPTION
                            </th>
                            <th scope="col" className="py-3 px-6">
                                TIME
                            </th>
                            <th scope="col" className="py-3 px-6">
                                DONE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                EDIT
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderMain()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
