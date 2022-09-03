import React from 'react'
import { useTasks } from '../Context/TaskProvider'
import { useNavigate} from 'react-router-dom'

export const Task = ({ data }) => {

    const {deleteOneTask} = useTasks();
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
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
                    deleteOneTask(data.id)
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
