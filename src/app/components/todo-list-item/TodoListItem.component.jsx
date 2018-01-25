import React from 'react';
import getTemlpate from './TodoListItem.component.template.jsx';


class TodoListItemComponent extends React.Component {
    render() {
        return getTemlpate.call(this);
    }

    createItems() {
        return this.props.items.map(this.itemsMapper);
    }

    itemsMapper(item) {
        return (<li key={item.id}>{item.text}</li>);
    }
}

export default TodoListItemComponent;