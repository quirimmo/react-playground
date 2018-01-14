import React from 'react';

class NewLink extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        if (this.props.active) {
            return (
                <span>{this.props.children}</span>
            );
        }

        return (
            <a
                href=''
                onClick={e => {
                    e.preventDefault()
                    this.props.onClick()
                }}
            >
                {this.props.children}
            </a>
        );
    }
}

export default NewLink;