import React
, {
useState } from "react";
 import './both.css'
import { useTodo } from "../context/Context";


 function Form() {
    const [todoText , setTodo] = useState("")
    const {addTodo}= useTodo()
    const Add = (e) => {
        e.preventDefault()
        if(!todoText) return
        addTodo(todoText)
        setTodo("")
    }
    return(
    <>
    <form onSubmit={Add} >
        <input
        value={todoText}
        onChange={(e) => setTodo(e.target.value)}

        type="text" />
        <button
        
        type="submit">
            Add
        </button>
    </form>
    </>
    )
 }

 export default Form;