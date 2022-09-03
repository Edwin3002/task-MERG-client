import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext)
    if(!context){
        throw new Error('context fallo');
    }
}

export const TaskContextProvider = ({children}) => {
    return <TaskContext.Provider value={{text: 'hello context'}}>
        {children}
    </TaskContext.Provider>
}