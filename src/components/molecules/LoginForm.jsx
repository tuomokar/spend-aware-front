import React from 'react'

import Button from 'components/atoms/Button';
import Styles from 'constants/Styles';
import TextField from 'components/atoms/TextField';
import TextInputActions from 'actions/TextInputActions';
import TextInputStore from 'stores/TextInputStore';
import UserActions from 'actions/UserActions';

/**
 * Handles logging in.
 */
export default class LoginForm extends React.Component {

    _loginAction() {
        let inputs = TextInputStore.getState().textInputs;

        UserActions.attemptToAuthenticate({
            username: inputs.username,
            password: inputs.password
        });
    }

    _usernameFieldInputChange(event, usernameInput) {
        TextInputActions.updateTextInput({
            key: 'username',
            value: usernameInput
        });
    }

    _passwordFieldInputChange(event, passwordInput) {
        TextInputActions.updateTextInput({
            key: 'password',
            value: passwordInput
        });
    }

    _styles() {
        return {
            margin: this.props.margin,
            display: 'flex',
            alignItems: 'center'
        }
    }

    render() {
        return (
            <span style={ this._styles() }>
                <TextField
                    onChangeAction={ this._usernameFieldInputChange }
                    placeholder='username'
                    showAsABox
                    underlineShow={ false } />
                <TextField
                    onChangeAction={ this._passwordFieldInputChange }
                    placeholder='password'
                    showAsABox
                    underlineShow={ false }  />
                <Button
                    backgroundColor={ Styles.colors.siteBackgroundColor }
                    clickEvent={ this._loginAction }
                    value='Login' />
            </span>
        );
    }
}

LoginForm.propTypes = {
    margin: React.PropTypes.string
}

LoginForm.defaultProps = {
    margin: '0 0 0 1.25rem'
}
