import React from 'react';
import { render } from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import TodoListComponent from './TodoListComponent.jsx';
import css from './../../assets/styles/main.css';

class App extends React.Component {
	  
	render () {
    	return (
			<div>
				<p>Hello React Project</p>
				<br/>
				<AwesomeComponent />
				<br/>
				<TodoListComponent />
			</div>
    	);
	}

}

export default App;