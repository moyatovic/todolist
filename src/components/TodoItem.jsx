import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class TodoItem extends Component {

     getStyle = () =>{
            return {
                backgorund: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ?
                'Line-through': 'none'
            }
    }
    
    render() {
        const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p className="pa2 ">
                <input type="checkbox" 
                     onChange={this.props.markComplete.bind(this, id)} />
                     {' '}
                {title}
                {' '}
                <button className="bg-red white w2 h2 br-100 right" 
                onClick={this.props.delTodo.bind(this, id)}>x</button></p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
