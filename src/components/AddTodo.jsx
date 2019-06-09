import React, { Component } from 'react'

export class AddTodo extends Component {
    state ={
        title: ''
    }

    onSubmit = (e) =>{
            e.preventDefault();
            this.props.addTodo(this.state.title);
            this.setState({title: ''})
        }
    onChangeTitle = (e) =>{
        this.setState({title: e.target.value})
    }
    
    render() {
       
        return (
            <form className="flex" onSubmit={this.onSubmit} >
                <input type="text" 
                name="title"
                placeholder="Add Todo ..."
                className="outline w-25"
                value={this.state.title}
                onChange={this.onChangeTitle}
                />
                <input
                type="submit"
                value="submit"
                className="btn"
                
                />
            </form>
        )
    }
}

export default AddTodo
