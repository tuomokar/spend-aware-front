import React from 'react'

import Styles from 'constants/Styles.js';

/**
 * A basic text component.
 */
export default class Text extends React.Component {

    _styles() {
        return {
            fontSize: this.props.fontSize,
            color: this.props.color,
            display: this.props.display
        }
    }

    /*
     * Renders the children as pure html. A cheat to get XSS to work (React
     * being too smart to prevent it otherwise). See also ItemList component.
     * DO NOT THIS AT HOME!
     */
    render() {
        return (
            <span
                dangerouslySetInnerHTML={ {__html: this.props.children } }
                style={ this._styles() } />
        );
    }
}


Text.propTypes = {
    color: React.PropTypes.string,
    children: React.PropTypes.string.isRequired,
    fontSize: React.PropTypes.string,
    display: React.PropTypes.string
}

Text.defaultProps = {
    color: Styles.colors.textWhiteGray,
    fontSize: '1.14rem'
}
