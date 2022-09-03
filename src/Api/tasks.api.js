import axios  from 'axios';

export const getTasks = async () => {
   const data = await axios.get('http://localhost:4000/tasks');
   return data.data
};
export const createTask = async (task) => {
   await axios.post('http://localhost:4000/tasks', task);
};
export const deleteTask = async (id) => {
   await axios.delete(`http://localhost:4000/tasks/${id}`);
};
// export const createTask = async (task) =>{
//    await axios.post('http://localhost:4000/tasks', task);
// };