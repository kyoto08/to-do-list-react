import React, {useState} from "react";
import "./App.css"

function App() {
    const[list, setList] = useState([]);
    const[input, setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo
        }
        setList([...list, newTodo])
        setInput("")
    }

    const deleteTodo = (id) => {
        const newList = list.filter((todo)=>todo.id !== id);
        setList(newList);
    };

    return (<div>
                <h1>To Do List</h1>
                <input
                className="input"
                type="text"
                value={input}
                onChange = {(e) => setInput(e.target.value)}
                />
                <button className="add-btn" onClick={() => addTodo(input)}>Add Task</button>
                <ul>
                    {list.map((todo) => (
                        <li key={todo.id}>
                            {todo.todo}
                            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>);
}

export default App;