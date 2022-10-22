import React, { useState, useReducer } from 'react'
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.title, action.payload.id)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                console.log(typeof todo.id, typeof action.payload.id);
                if (todo.id.toString() === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo.id.toString() !== action.payload.id);
        default:
            return todos;
    }
}

const newTodo = (title, id) => {
    return { id: id, title: title, completed: false };
}


const UseReducer = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [todo, setTodo] = useState({ title: '', id: "", completed: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { title: todo.title, id: parseInt(Math.random() * 100) } });
        setTodo({ title: '', id: "", completed: false });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>A simple TODO app with useReducer</h1>
                <input type="text" value={todo.title} onChange={e => setTodo({ ...todo, title: e.target.value, })} />
            </form>
            <Todo todos={todos} dispatch={dispatch} />
        </div>
    )
}

export default UseReducer