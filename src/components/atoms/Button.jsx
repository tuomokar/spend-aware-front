import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Styles from 'constants/Styles.js';

/**
 * A button. Give the onClick event as clickEvent props.
 */
export default class Button extends React.Component {

    _styles() {
        return StyleSheet.create({
            button: {
                backgroundColor: this.props.color,
                color: Styles.colors.textWhiteGray,
                border: '0',
                borderRadius: '5%',
                padding: '10px 20px'
            }
        });
    }

    render() {
        return (
            <input
                className={ css(this._styles().button) }
                onClick={ this.props.clickEvent }
                type='button'
                value={ this.props.value } />
        );
    }
}



Button.propTypes = {
    clickEvent: React.PropTypes.func.isRequired,
    color: React.PropTypes.string,
    value: React.PropTypes.string
}

Button.defaultProps = {
    color: Styles.colors.submitButtonOrange,
    value: 'Submit'
}
