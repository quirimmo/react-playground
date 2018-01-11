import React from 'react';

class TodoListItemComponent extends React.Component {
    render() {
        return (
            <ul>
                {this.createItems()}
            </ul>
        );
    }

    createItems() {
        return this.props.items.map(this.itemsMapper);
    }

    itemsMapper(item) {
        return (<li key={item.id}>{item.text}</li>);
    }
}

export default TodoListItemComponent;