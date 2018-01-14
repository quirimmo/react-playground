const visibilityFilter = visibilityFilterFn;

// Reducers Methods Exported
// --------------------------------------------------------------------------------------
export default visibilityFilter;


// Reducers Methods Implementation
// --------------------------------------------------------------------------------------

function visibilityFilterFn(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}