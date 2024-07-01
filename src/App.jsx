import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'
import { TodoProvider } from './context/Context'
import '../src/components/both.css'
function App() {
  const [todos , setTodos] = useState([]);
  const addTodo = (todoText) => {
    setTodos((prev) => ([{id:Date.now(),todoText} ,...prev]));
  }
  const deleteTodo =(id)=> {
    setTodos(prev => prev.filter((todo) => todo.id !== id))
  }
  const updateTodo = (todo , id) => {
    setTodos(prev => prev.map(prevTodo => (prevTodo.id === id ? todo : prevTodo)))
  }
  
const toggleCheck = (id) => {
  setTodos(prev => prev.map(prevTodo => (prevTodo.id === id ? {...prevTodo,Checked:!prevTodo.Checked}: prevTodo )
  ))
}

useEffect(
  () => {
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length > 0){
    setTodos(todos)
  }
  },[]
)
useEffect(() => {
 localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos]
)
  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleCheck}}>
    <div className="container">
    <h1 className='head'>Todo-List App</h1>
    <div className="form">
      <Form  />
    </div>
    <div className="Todo-List">
      {todos.map((todo) =>(
         <div className="todo" key={todo.id}>
          <Todo todo={todo} />
         </div>
      ))} 
    
    </div>
    </div>
   
    </TodoProvider>
  )
}

export default App
