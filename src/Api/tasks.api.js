import axios  from 'axios';

export const getTasks = async () => {
   const data = await axios.get('http://localhost:4000/tasks');
   return data.data
};

export const getTask = async (id) => {
   const data = await axios.get(`http://localhost:4000/tasks/${id}`);
   return data.data
};
export const createTask = async (task) => {
   await axios.post('http://localhost:4000/tasks', task);
};
export const updateTask = async (id, newTask) => {
   await axios.put(`http://localhost:4000/tasks/${id}`, newTask);
};
export const updateDone = async (id, done) => {
   await axios.put(`http://localhost:4000/tasks/${id}`, {done});
};
export const deleteTask = async (id) => {
   await axios.delete(`http://localhost:4000/tasks/${id}`);
};