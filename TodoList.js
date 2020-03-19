import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render(){
        let {item} = this.props
        return (
            <div class="todolist">
                <ul>
                    {
                        item.map((todo,i) => <li key={i}><TodoItem text={todo}/></li>)
                    }
                </ul>
            </div>
        );
    }
}
export default TodoList;