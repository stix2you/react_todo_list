import { useState } from 'react';

function generateId() {
    return Math.floor(Math.random() * 1234);
}


function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        setTodos(todos =>
            todos.concat({     // concat returns a new array of the two arrays which are named todos and the object
                text: input,
                id: generateId()
            }),
            setInput('')   // clear the input
        )
    }

    const removeTodo = (id) => 
        setTodos((todos) => todos.filter((t) => t.id !== id));
    

    return (
        <div className="container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="New Todo" />

            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map(({ text, id }) => {
                    return (<li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>X</button>
                    </li>
                    );
                })
                }
            </ul>
        </div>
    );
}

export default Todo;