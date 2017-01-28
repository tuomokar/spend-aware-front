import React from 'react';
import { merge } from 'lodash';

import Styles from 'constants/Styles';
import TextField from 'material-ui/TextField';


/**
 * A basic textfield input component.
 */
export default class TextFieldElement extends React.Component {

    _boxStyles() {
        return {
            root: {
                backgroundColor: Styles.colors.white,
                height: '100%'
            },
            placeholder: {
                bottom: '0px'
            },
            input: {
                color: Styles.colors.textFieldAlmostBlack
            }
        };
    }

    _styles() {
        let defaultStyles = {
            root: {
                width: this.props.width,
                margin: this.props.margin,
                fontSize: '0.75rem'
            },
            placeholder: {
                fontSize: '0.75rem',
                color: 'grey'
            },
            input: {
                color: this.props.textColor
            }
        };

        let styles = defaultStyles;
        if (this.props.showAsABox) {
            styles = merge(styles, this._boxStyles());
        }
        return styles;
    }

    render() {
        let styles = this._styles();

        return (
            <TextField
                hintStyle={ styles.placeholder }
                hintText={ this.props.placeholder }
                inputStyle={ styles.input }
                onChange={ this.props.onChangeAction }
                style={ styles.root }
                underlineShow={ this.props.underlineShow }
                value={ this.props.value } />
        );
    }
}


TextFieldElement.propTypes = {
    margin: React.PropTypes.string,
    onChangeAction: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    showAsABox: React.PropTypes.bool,
    textColor: React.PropTypes.string,
    underlineShow: React.PropTypes.bool,
    width: React.PropTypes.string
}

TextFieldElement.defaultProps = {
    margin: '4px',
    textColor: Styles.colors.white,
    underlineShow: true,
    width: '5rem'
}
