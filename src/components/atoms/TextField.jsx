import React from 'react'
import TextField from 'material-ui/TextField';


/**
 * A basic textfield input component.
 */
export default class TextFieldElement extends React.Component {

    _styles() {
        return {
            root: {
                width: this.props.width,
                backgroundColor: 'white',
                margin: this.props.margin,
                height: '100%',
                fontSize: '0.75rem'
            },
            placeholder: {
                bottom: '-0px',
                fontSize: '16px',
                fontSize: '0.75rem'
            }
        }
    }

    render() {
        return (
            <TextField
                hintStyle={ this._styles().placeholder }
                hintText={ this.props.placeholder }
                onChange={ this.props.onChangeAction }
                style={ this._styles().root }
                underlineShow={ this.props.underlineShow }/>
        );
    }
}


TextFieldElement.propTypes = {
    margin: React.PropTypes.string,
    onChangeAction: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    underlineShow: React.PropTypes.bool,
    width: React.PropTypes.string
}

TextFieldElement.defaultProps = {
    margin: '4px',
    underlineShow: true,
    width: '5rem'
}
