import React from 'react';

function getTemplate() {
    return (
        <ul>
            {this.createItems()}
        </ul>
    );
}

export default getTemplate;