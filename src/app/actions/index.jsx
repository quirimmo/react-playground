let nextTodoId = 0;


// Actions Methods Exported
// --------------------------------------------------------------------------------------

export const addTodo = addTodoFn;
export const setVisibilityFilter = setVisibilityFilterFn;
export const toggleTodo = toggleTodoFn;


// Actions Methods Implementation
// --------------------------------------------------------------------------------------

function addTodoFn(text) {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
}

function setVisibilityFilterFn(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
}

function toggleTodoFn(id) {
    return {
        type: 'TOGGLE_TODO',
        id
    };
}