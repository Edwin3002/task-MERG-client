import React from 'react'
import { Routes, Route } from 'react-router-dom';
import '../css/App.css'
import { Error404 } from '../Components/404';
import { Home } from '../Components/Home';
import { TaskForm } from '../Components/TaskForm';
import { NavB } from '../Components/NavB';
import { TaskContextProvider } from '../Context/Task.Context';

const App = () => {
  return (
    <TaskContextProvider>
    <NavB/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<TaskForm/>}/>
      <Route path='/*' element={<Error404/>}/>
    </Routes>
    </TaskContextProvider>
  )
}

export default App