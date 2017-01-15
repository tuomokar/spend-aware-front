import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Styles from 'constants/Styles.js';

/**
 * A basic text component.
 */
export default class Text extends React.Component {

    _styles() {
        return StyleSheet.create({
            text: {
                fontSize: this.props.fontSize,
                color: this.props.color
            }
        });
    }

    render() {
        return (
            <span className={ css(this._styles().text) }>
                { this.props.children }
            </span>
        );
    }
}



Text.propTypes = {
    fontSize: React.PropTypes.string,
    color: React.PropTypes.string,
    children: React.PropTypes.string.isRequired
}

Text.defaultProps = {
    fontSize: '1.14rem',
    color: Styles.colors.textWhiteGray
}
