import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Styles from 'constants/Styles.js';

/**
 * A button. Give the onClick event as clickEvent props.
 */
export default class Button extends React.Component {

    _styles() {
        return {
            borderRadius: '5%',
            margin: this.props.margin
        };
    }

    render() {
        return (
            <RaisedButton
                backgroundColor={ this.props.color }
                label={ this.props.value }
                labelColor={ Styles.colors.textWhiteGray }
                onClick={ this.props.clickEvent }
                style={ this._styles() }/>
        );
    }
}



Button.propTypes = {
    clickEvent: React.PropTypes.func.isRequired,
    color: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    margin: React.PropTypes.string,
    value: React.PropTypes.string
}

Button.defaultProps = {
    color: Styles.colors.submitButtonOrange,
    disabled: false,
    margin: '4px',
    value: 'Submit'
}
