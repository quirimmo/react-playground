'use strict';

import React from 'react';
import { render } from 'react-dom';
import TodoListItemComponent from './../todo-list-item/TodoListItem.component.jsx';


function getTemplate() {
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

export default getTemplate;