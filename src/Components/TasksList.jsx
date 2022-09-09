import React, { useEffect } from 'react'
import { Task } from './Task'
import { useTasks } from '../Context/TaskProvider'
import { Card } from './Card';

export const TasksList = () => {
    const { tasks, getListTasks } = useTasks();

    const renderMain = () => {
        if (tasks.length == 0) {
            return <p rowSpan={6} className='mt-6'>Empty</p>
        } else {
            return tasks.map(t => (

                <Card data={t} key={t.id} />
            ))
        }
    }

    useEffect(() => {
        getListTasks();
    }, [])


    return (
        <div>
            <h1 className='text-center text-white text-4xl font-bold my-4'>Tasks List</h1>
            <div className='flex justify-around flex-wrap'>
                {renderMain()}
            </div>
        </div>
    )
}
