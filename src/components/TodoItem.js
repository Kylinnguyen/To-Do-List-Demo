import React from 'react';
import PropTypes from "prop-types";


const TodoItem = (prop) => {
    const todo = prop.todoProps;
    const markCompleted = prop.markCompletedFunction;
    const deleteTodo = prop.deleteTodoFunction;
    // Style
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        margin: '10px',
        border: '2px #ccc dotted',
        borderRadius: '10px',
        textDecoration: todo.completed ? 'line-through': 'none'
    }
    const deleteButton = {
        border: 'none',
        background: '#cc1310',
        borderRadius: '10%',
        float: 'right',
        padding: '4px 8px',
        cursor: 'pointer',
        color: '#ffffff',
        fontSize: '15px',

    }
    
    return (
    <p style= {todoItemStyle}>
        <input  type="checkbox" 
                onChange={markCompleted.bind(this, todo.id)} 
                checked={todo.completed}
        />
        {todo.title}
        <button style={deleteButton} onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
    </p>
    )
}

TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompletedFunction: PropTypes.func.isRequired,
    deleteTodoFunction: PropTypes.func.isRequired
}
export default TodoItem