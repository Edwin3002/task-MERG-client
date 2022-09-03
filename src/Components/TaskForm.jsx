import React, { useContext } from 'react'
import { Form, Formik } from 'formik';
import { createTask } from '../Api/tasks.api';
import { TaskContext, TaskContextProvider } from '../Context/Task.Context';


export const TaskForm = () => {

  const text = useContext(TaskContext);
  console.log(text);

  return (
    <div className='w-3/4 mx-auto'>
      <Formik initialValues={{
        title: '',
        task: ''
      }}
        onSubmit={async (values, actions) => {

          try {
            const res = await createTask(values);
            actions.resetForm();
          } catch (error) {
            console.error('salio mal');
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className="col-span-3 sm:col-span-2 mt-2">
              <label for="company-website" className="block text-sm font-medium text-white">TITLE</label>
              <div className="mt-1 mb-6 flex rounded-md shadow-sm">

                <input type='text' name='title' id="company-website" className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder='Title' onChange={handleChange}  value={values.title}/>
              </div>
            </div>
            <div>
              <label for="about" className="block text-sm font-medium text-white">DESCRIPTION</label>
              <div className="mt-1 mb-6">
                <textarea id="about" name="task" rows="3" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder='Write a description' onChange={handleChange}
                value={values.task}></textarea>
              </div>

            </div>
            <button type="submit"  disabled={isSubmitting} className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">{isSubmitting ? "saving" : "Send"}</button>
          </Form>
        )}
      </Formik>

    </div>
  )
}
