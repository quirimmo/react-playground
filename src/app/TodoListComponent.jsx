import React from 'react';
import TodoListItemComponent from './TodoListItemComponent.jsx';

class TodoListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return ( 
            <div>
                <h3>TODO</h3> 
                <TodoListItemComponent items = {this.state.items}/> 
                <form onSubmit = {this.handleSubmit} >
                    <input onChange = {this.handleChange} value = {this.state.text}/> 
                    <button>
                        Add Todo Item {this.state.items.length + 1} 
                    </button> 
                </form> 
            </div>
        );
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}

export default TodoListComponent;