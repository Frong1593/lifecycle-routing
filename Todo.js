import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import './CSS.css';

class Todo extends Component {
    constructor(props){
    super(props)
    this.state = { todoItems:[]}
    this.addTodo = this.addTodo.bind(this)
    }
    
    addTodo(newTodo){
        this.setState({
            todoItems:this.state.todoItems.concat([newTodo])
        })
    }
    render(){
        let {todoItems} = this.state
        return (
            <div class="bg5 left">
                <TodoInput onAddTodo={this.addTodo}/>
                <TodoList item={todoItems}/>
            </div>
        );
    }
}
export default Todo;