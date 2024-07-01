import React
, { useState } from "react";
 import './both.css'
import { useTodo } from "../context/Context";


 function Todo({todo}) {
  const [editable , setEditable]= useState(false)
  const {toggleCheck,updateTodo, deleteTodo} = useTodo()
  const [todoMsg,setTodoText] = useState(todo.todoText)
  const editTodo = () => {
    updateTodo(todo.id , {...todo,todo:todoMsg})
    setEditable(false)
  }
  const toggle = () => {
    toggleCheck(todo.id)
  }
    return(
    <>
   
      <div
       className={`input-box ${todo.Checked ?"checkInput": ""}`}
       >
      <input
      checked={todo.Checked}
      type="checkbox" className="checkbox"
      onChange={toggle}
      />
        <input
         type="text" 
        className="edit-text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoMsg}
        readOnly={!editable}
        />
      </div>
      <div className="button-box">
      <button className="edit"
      onClick={() => {
        if(todo.Checked) return
        if(editable){
          editTodo();
        }else{
          setEditable(prev => !prev)
        }
      }}
      disabled={todo.Checked}
      >
          {editable? <i class="fa-solid fa-folder"></i>:<i class="fa-solid fa-pen"></i>}
        </button>
        <button
        onClick={() => deleteTodo(todo.id)}
        className="delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>

   
    
    </>
    )
 }

 export default Todo;