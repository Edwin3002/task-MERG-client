import React from 'react'
import { useTasks } from '../Context/TaskProvider'
import { useNavigate } from 'react-router-dom'

export const Card = ({ data }) => {

    const { deleteOneTask, updateOneDone } = useTasks();
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }

    const handleUpdateDone = async (id) => {
        if (data.done === 0) {
            await updateOneDone(id, 1)
        } else {
            await updateOneDone(id, 0)
        }
    }

    return (
        <div className='w-60 h-60 border rounded my-4'>
            <div className='h-1/5 flex justify-between px-4 bg-[#4D96FF] rounded-t'>
                <span className='flex items-center w-1/2 font-bold capitalize '>{data.title}</span>
                <span className='flex justify-end items-center w-1/2 hover:scale-110' onClick={() => { handleUpdateDone(data.id) }}>
                    {data.done == 0 ? '💔' : '💚'}</span>
            </div>
            <div className='h-3/5 grid content-between pt-2 px-2 bg-gray-200'>
                <p className='text-center'>{data.task} </p>
                <p className='font-bold'>{data.createAt.slice(0, 10)}</p>
            </div>
            <div className='h-1/5 flex justify-evenly font-bold text-white  '>
                <span className='flex justify-center items-center w-1/2 bg-[#FFD93D] rounded-bl' onClick={() => {
                    handleUpdate(data.id)
                }}>Edit</span>
                <span className='flex justify-center items-center w-1/2 bg-[#FF6B6B] rounded-br' onClick={() => {
                    deleteOneTask(data.id)
                }}>Delete</span>
            </div>
        </div>
    )
}
