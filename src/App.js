import React from 'react';
import Todos from './components/Todos/todos.component';
import Header from './components/Header/header.component';
import AddTodo from './components/Add-Todo/add-todo.component';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with SO",
        completed: false,
      },
      {
        id: 3,
        title: "Meeting with Boss",
        completed: false,
      },
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(
      todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      } 
    )});
  }

  deleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
  }

  render() {
    return (
      <div>
        <div className='container'>
          <Header />
          <AddTodo />
          <Todos 
            todos={ this.state.todos } 
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo} />
            
          </div>
      </div>
    )
  }
}

export default App;
