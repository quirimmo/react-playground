import { combineReducers } from 'redux';

import todos from './todo/reducers/todos.jsx';
import visibilityFilter from './todo/reducers/visibilityFilter.jsx';
import likesCounter from './likes-counter/reducers/likes-counter.reducer.jsx';

const reducers = combineReducers({ todos, visibilityFilter, likesCounter });

export default reducers;