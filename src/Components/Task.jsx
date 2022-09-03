import React from 'react'
import { deleteTask } from '../Api/tasks.api'

export const Task = ({ data }) => {

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            alert('task delete');
        } catch (error) {
            alert('task no fue eliminada');
            console.error(error);
        }
    }
    const handleUpdate = (id) => {
        console.log(id + 'up');
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                {data.title}
            </th>
            <td className="py-4 px-6">
                {data.task}
            </td>
            <td className="py-4 px-6">
                {data.createAt}
            </td>
            <td className="py-4 px-6 text-center">
                {data.done == 0 ? '💔' : '💚'}
            </td>
            <td className="py-4 px-6">
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline hover:text-red-700 " onClick={() => {
                    handleDelete(data.id)
                }}>Delete</a>
            </td>
            <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:text-blue-700 " onClick={() => {
                    handleUpdate(data.id)
                }}>Edit</a>
            </td>
        </tr>
    )
}
