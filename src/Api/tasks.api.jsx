import axios  from 'axios';
import { apiHeroku } from './urlApi';

export const getTasks = async () => {
   const data = await axios.get(apiHeroku);
   return data.data
};

export const getTask = async (id) => {
   const data = await axios.get(apiHeroku+ '/' +id);
   return data.data
};
export const createTask = async (task) => {
   await axios.post(apiHeroku, task);
};
export const updateTask = async (id, newTask) => {
   await axios.put(apiHeroku+ '/'+id, newTask);
};
export const updateDone = async (id, done) => {
   await axios.put(apiHeroku+ '/done/'+id, {done});
};
export const deleteTask = async (id) => {
   await axios.delete(apiHeroku+ '/'+id);
};