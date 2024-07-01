import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos:[{
        id:1,
        todoText:"Todo message here",
        Checked:false
    }],
    addTodo:(todoText) => {},
    deleteTodo:(id) => {},
    updateTodo : (id,todo) => {},
    toggleCheck : (id) => {}

});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;