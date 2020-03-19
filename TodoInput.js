import React, { Component } from 'react';
import './CSS.css';

class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state = { newTodo:""}
        this.addClick=this.addClick.bind(this)
        }

    addClick(){
        let {onAddTodo}=this.props
        onAddTodo(this.state.newTodo)
        this.setState({
            newTodo:""
        })
    }
    render(){
        let {newTodo}=this.state
        return (
            <div>
                <input class="textBox" value={newTodo} onChange={(e)=>this.setState({newTodo:e.target.value})} />
                <button class="but" onClick={this.addClick}>เพิ่ม</button>
            </div>
        );
    }
}
export default TodoInput;