import React, {Component} from 'react';
import TodoItem from './components/TodoItem'
import todosData from './data/todosData'

import './styles/style.css'

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
// https://scrimba.com/g/greacthooks

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  /* LifeCycle methods */
  componentDidMount() {
    // GET the data I need to correctly display
    console.log("Mounted")
  }
  
  shouldComponentUpdate(nextProps, nextState){
    // return true if want it to update
    // return false if not
    console.log("Updated")
    return true
  }
   
  componentWillUnmount() {
    // remove event listener
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
    console.log("Will Mount")
  }

  /* methods */
  handleChange(id){
      this.setState(prevState => {
          let updatedTodos = prevState.todos.map(todo => {
              if(todo.id === id){
                return {
                  ...todo,
                  completed: !todo.completed
                }
              }
               return todo
          })
          return {
            todos: updatedTodos
          }
      })
  }

  render(){
    const todoItems = this.state.todos.map(item => 
        <TodoItem 
            key={item.id} 
            item={item}
            handleChange={this.handleChange}
        />)
    
    return (
      <div className="todo-list">
          {todoItems}
      </div>
    );
  }
}

export default App;
