import { ACTIONS } from './UseReducer';

const Todo = ({ todos, dispatch }) => {

    const handleToggle = (e) => {
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: e.target.parentElement.id } });
    }
    const handleDelete = (e) => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: e.target.parentElement.id } });
    }

    return (
        <div className="bg-dark color-white">
            {
                todos.map((todo, index) => {
                    return (
                        <div key={index} id={todo.id}>
                            <span style={{ color: todo.completed ? "#AAA" : "#000" }}>{todo.title}</span>
                            <button onClick={handleToggle} style={{ color: todo.completed ? "#AAA" : "#000" }}>Toggle</button>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Todo