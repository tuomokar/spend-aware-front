import React from 'react'

import Styles from 'constants/Styles.js';

/**
 * A text component with an onClick action.
 */
export default class Link extends React.Component {

    _styles() {
        return {
            fontSize: this.props.fontSize,
            color: this.props.color,
            display: this.props.display,
            cursor: 'pointer'
        }
    }

    render() {
        return (
            <span
                onClick={ this.props.clickEvent }
                style={ this._styles() }>
                { this.props.children }
            </span>
        );
    }
}


Link.propTypes = {
    children: React.PropTypes.string.isRequired,
    color: React.PropTypes.string,
    clickEvent: React.PropTypes.func.isRequired,
    fontSize: React.PropTypes.string,
    display: React.PropTypes.string
}

Link.defaultProps = {
    color: Styles.colors.submitButtonOrange,
    fontSize: '1.14rem'
}
