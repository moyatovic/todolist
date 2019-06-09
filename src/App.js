import React, { Component} from 'react';
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'

class App extends Component {
  state  = {
    todos: [
      {
        id: 1,
        title: 'complete Todo app',
        completed: false
      },
      {
        id:2,
        title: 'clean my room',
        completed: false
      },
      {
        id:3,
        title: 'cook something to eat',
        completed: false
      }
    ]
  }

  // toggle complete
  markComplete = (id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed  = !todo.completed
      }
      return todo;
    })
  });
}
// Add todo
  addTodo = (title) =>{
    const newTodo ={
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

//delete Todo
delTodo = (id) => {
 this.setState({
   todos: [...this.state.todos.filter(todo=>todo.id !== id)]
 });
}
  render() {
    
    return (
    <div className="App bg-gray">
      <Header />
        <h1>App</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} 
          markComplete={this.markComplete} 
          delTodo={this.delTodo} />
    </div>
  );
}}

export default App;
