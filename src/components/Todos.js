import React,{Fragment, useState} from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {

    //     // Muốn đưa giá trị của biến vào trong compent thì phải đặt biến ở trong dấu {}
    const [todosState, setTodosState] = useState([
        // {   
        //     id: uuidv4(),
        //     title: 'Việc cần làm 1',
        //     completed: true,
        // },
        // {   
        //     id: uuidv4(),
        //     title: 'Việc cần làm 2',
        //     completed: false,
        // },
        // {   
        //     id: uuidv4(),
        //     title: 'Việc cần làm 3',
        //     completed: false,
        // }
    ])

    const markCompleted = id => {
        const newTodo = todosState.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed 
            }
            return todo
        })
        setTodosState(newTodo)
    }

    const deleteTodo = id => {
        const newTodo = todosState.filter(todo => todo.id !== id)
        setTodosState(newTodo)
    }

    const addTodo = title => {
        const newTodo = [...todosState, 
            {
                id: uuidv4(),
                title: title,
                completed: false,
            }]
        setTodosState(newTodo)
    }

    return (
        <Fragment>
            <AddTodo addTodoFunction={addTodo}/>
            {todosState.map(todo => {
                return (
                    <TodoItem 
                        key={todo.id} 
                        todoProps={todo} 
                        markCompletedFunction={markCompleted}
                        deleteTodoFunction={deleteTodo}
                    />
                )
            })}
        </Fragment>
    )
}


export default Todos