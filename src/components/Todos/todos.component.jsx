import React from 'react';
import TodoItem from '../Todo-Item/todo-item.component';
import PropTypes from 'prop-types';

import './todos.styles.css';

class Todos extends React.Component {

  render () {
    return (
      <div>
        <div className='todos-container'>
          { 
            this.props.todos.map(todo => 
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                markComplete={this.props.markComplete}
                deleteTodo={this.props.deleteTodo} />
            ) 
          }
          </div>
      </div>
    )
  }
}

//proptypes

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default Todos;

