import React, {useState} from "react";
import PropTypes from 'prop-types'

const AddTodo = (prop) => {
    const addTodo = prop.addTodoFunction
    
    const [title, setTitle] = useState('')
    // style 
    const formStyle = {
        display: "flex",
        textAlign: "center",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "10px"
    }

    const addInputStyle = {
        padding: "10px",
        flex: "10"
    }
    const addButtonStyle = {
        marginLeft: "10px",
        padding: "10px",
        color: "white",
        backgroundColor: "#177fff",
        fontSize: '15px',
        border: "none",
        borderRadius: '10px',
        flex: "1"
    }

    const changeTitle = event => {
        setTitle(event.target.value)
        console.log(title)
    }

    const addSingleTodo = event => {
        event.preventDefault()
        if(title !== ''){
            addTodo(title)
            setTitle('')
        }
    }
    
    return(
        <form style={formStyle} onSubmit={addSingleTodo}>
            <input  type="text" 
                    placeholder="Add your work to do" 
                    name="title" 
                    style={addInputStyle}
                    value={title}
                    onChange={changeTitle}
            />
            <button type="submit" value="Thêm" style={addButtonStyle}>Add</button>
        </form>
    )
}

AddTodo.propTypes = {
    addTodoFunction: PropTypes.func.isRequired
}
export default AddTodo