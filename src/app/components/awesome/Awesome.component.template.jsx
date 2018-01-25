'use strict';

import React from 'react';
import { render } from 'react-dom';


function getTemplate() {
    return (
		<div>
			Likes: <span>{this.state.likesCount}</span> 
			<div>
				<button onClick={this.onLike}>Like Me!</button>
			</div>
		</div>
	);
}

export default getTemplate;