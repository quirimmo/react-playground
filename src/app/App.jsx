import React from 'react';
import { render } from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import css from './../../assets/styles/main.css';

class App extends React.Component {
	  
	render () {
    	return (
			<div>
				<p>Hello React Project</p>
				<AwesomeComponent />
			</div>
    	);
	}

}

export default App;