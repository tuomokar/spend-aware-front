import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Styles from 'constants/Styles.js';

/**
 * A basic text component
 */
export default class Text extends React.Component {

    styles() {
        return StyleSheet.create({
            text: {
                fontSize: this.props.fontSize,
                color: this.props.color
            }
        });
    }

    render() {
        let rootStyles = css(this.styles().text);
        return (
            <span className={ rootStyles }>
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
