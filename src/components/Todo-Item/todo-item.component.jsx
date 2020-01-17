import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    render() {
        const { todo,markComplete,deleteTodo } = this.props;
        return (
            <div style={this.getStyle()}>
                 <p className='todo-item' key={todo.id}>
                    <input 
                        type='checkbox' 
                        onChange={ markComplete.bind(this,todo.id) } 
                    />
                    {' '}
                    { todo.title }
                    <button 
                        style={btnStyle}
                        onClick={ deleteTodo.bind(this,todo.id) } >
                        x
                    </button>
                </p>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: NamedNodeMap,
    padding: '5px 9px',
    cursor: 'pointer',
    borderRadius: '50%',
    float: 'right',

}


  

export default TodoItem
