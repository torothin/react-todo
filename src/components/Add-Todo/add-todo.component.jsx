import React, { Component } from 'react'
import './add-todo.styles.css';

export class AddTodo extends Component {


    

    render() {
        return (
            <form className='add-form'>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Add Todo' 
                    className='add-input'
                    />
                <input 
                    type='submit' 
                    value='submit' 
                    className='submit-btn'
                    />

            </form>
        )
    }
}

export default AddTodo
