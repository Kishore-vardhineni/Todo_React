import './App.css';
import { useState } from 'react';

function App() {

  const [todoInput, updateInput] = useState('');
  const [todoList, updateTodo] = useState([
    {
      id: 1,
      task: 'Learn React'
    },
    {
      id: 2,
      task: 'Learn Angular'
    }
  ]);

  let nextTaskId = 3;
  function addNewTodo() {
    if (todoInput === "") {
      alert('Add some task');
    } else {
      let newTodoTask = [
        ...todoList,
        {
          id: nextTaskId + 1 ,
          task: todoInput
        }
      ]
      updateTodo(newTodoTask);
      updateInput("");
    }
  }

  const addNewValue = (e) => {
    let task = e.target.value;
    updateInput(task)
  }

  function deleteTodo(id) {
   let deleteList = todoList.filter((value) => {
       return value.id !== id
    })
    alert(id)
    updateTodo(deleteList);
  }

  return (
    <>
      <div className="container mt-5 w-50">
        <h3 className="text-center">Todo App using React</h3>
        <div className="input-group">
          <input className="form-control" type="text" value={todoInput} onChange={addNewValue} />
          <button className="btn btn-primary" onClick={() => {
            addNewTodo();
          }}>Add</button>
        </div>
        <ul className="list-group mt-4">
          {
            todoList.map((todo) => {
              return (
                <li className="list-group-item" key={todo.id}>
                  <p>{todo.task}</p>
                  <button className="btn" onClick={() =>deleteTodo(todo.id)}>❌</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}
export default App;