import { combineReducers } from 'redux';

import todos from './todo/reducers/todos.reducer.jsx';
import visibilityFilter from './todo/reducers/visibility-filter.reducer.jsx';
import likesCounter from './likes-counter/reducers/likes-counter.reducer.jsx';

const reducers = combineReducers({ todos, visibilityFilter, likesCounter });

export default reducers;
