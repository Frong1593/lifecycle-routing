import React, { Component } from 'react';

class TodoItem extends Component {
    render(){
        let {text} = this.props
        return (
            <div>
                {text}
            </div>
        );
    }
}
export default TodoItem;