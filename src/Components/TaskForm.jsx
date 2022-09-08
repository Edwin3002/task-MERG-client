import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik';
import { useTasks } from "../Context/TaskProvider";
import { useNavigate, useParams } from 'react-router-dom'

export const TaskForm = () => {

  const { createOneTask, getOneTask, updateOneTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    task: ''
  })

  const oneTask = async () => {
    if (params.id) {
      const ta = await getOneTask(params.id);
      setTask({
        title: ta[0].title,
        task: ta[0].task
      })
    }
  }

  useEffect(() => {
    oneTask();
  }, [])

  return (
    <div className='w-3/4 mx-auto'>
      <Formik initialValues={
        task
      }
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateOneTask(params.id, values);
            console.log(values);
          } else {
            await createOneTask(values);
          }

          setTask({
            title: '',
            task: ''
          });
          navigate('/')
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1 className='text-center text-white text-4xl font-bold my-4'>{!params.id ? 'CREATE TASK' : 'UPDATE TASK'}</h1>
            <div className="col-span-3 sm:col-span-2 mt-2">
              <label for="company-website" className="block text-sm font-medium text-white">TITLE</label>
              <div className="mt-1 mb-6 flex rounded-md shadow-sm">

                <input type='text' name='title' id="company-website" className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder='Title' onChange={handleChange} value={values.title} />
              </div>
            </div>
            <div>
              <label for="about" className="block text-sm font-medium text-white">DESCRIPTION</label>
              <div className="mt-1 mb-6">
                <textarea id="about" name="task" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder='Write a description' onChange={handleChange}
                  value={values.task}></textarea>
              </div>

            </div>
            <button type="submit" disabled={isSubmitting} className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">{isSubmitting ? "saving" : "Send"}</button>
          </Form>
        )}
      </Formik>

    </div>
  )
}
