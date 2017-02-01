import React from 'react'

import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';
import Styles from 'constants/Styles';
import Text from 'components/atoms/Text';
import TextField from 'components/atoms/TextField';
import TextInputActions from 'actions/TextInputActions';
import TextInputStore from 'stores/TextInputStore';
import Title from 'components/atoms/Title';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';


/**
 * Shows a login form.
 */
export default class RegistrationPage extends React.Component {

    constructor() {
        super();
        this.state = UserStore.getState();
        this.mounted = false;
    }

    componentDidMount() {
        UserStore.listen(this._onChange.bind(this));
        this.mounted = true;
    }

    componentWillUnmount() {
        UserStore.unlisten(this._onChange.bind(this));
        this.mounted = false;
    }

    _onChange(state) {
        if (this.mounted === false) {
            return;
        }
        this.setState(state)
    }

    _styles() {
        return {
            container: {
                display: 'flex',
                flexDirection: 'column'
            },
            form: {
                display: 'flex',
                flexDirection: 'column'
            }
        }
    }

    _registrationAction() {
        let inputs = TextInputStore.getState().textInputs;

        UserActions.register({
            username: inputs.usernameRegister,
            password: inputs.passwordRegister,
            passwordConfirmation: inputs.passwordConfirmationRegister
        });
    }

    _usernameFieldInputChange(event, usernameInput) {
        TextInputActions.updateTextInput({
            key: 'usernameRegister',
            value: usernameInput
        });
    }

    _passwordFieldInputChange(event, passwordInput) {
        TextInputActions.updateTextInput({
            key: 'passwordRegister',
            value: passwordInput
        });
    }

    _passwordConfirmationFieldInputChange(event, passwordInput) {
        TextInputActions.updateTextInput({
            key: 'passwordConfirmationRegister',
            value: passwordInput
        });
    }

    _renderFailedRegisterErrorMessage(error) {
        if (error === undefined || error.message === undefined) {
            return undefined;
        }

        return (
            <Text color={ Styles.colors.errorTextOrange }>
                { error.message }
            </Text>
        );
    }

    render() {
        let errorMessage = this._renderFailedRegisterErrorMessage(this.state.error);
        let styles = this._styles();

        return (
            <div style={ styles.container }>
                <Title level={2}>Register</Title>
                <div style={ styles.form }>
                    <TextField
                        onChangeAction={ this._usernameFieldInputChange }
                        placeholder='username'
                        showAsABox
                        underlineShow={ false }
                        value={ TextInputStore.getState().textInputs.usernameRegister }
                        width={ '15rem' } />
                    <TextField
                        onChangeAction={ this._passwordFieldInputChange }
                        placeholder='password'
                        showAsABox
                        underlineShow={ false }
                        value={ TextInputStore.getState().textInputs.passwordRegister }
                        width={ '15rem' } />
                    <TextField
                        onChangeAction={ this._passwordConfirmationFieldInputChange }
                        placeholder='confirm password'
                        showAsABox
                        underlineShow={ false }
                        value={ TextInputStore.getState().textInputs.passwordConfirmationRegister }
                        width={ '15rem' } />
                </div>
                <div>
                    <Button
                        backgroundColor={ Styles.colors.siteBackgroundColor }
                        clickEvent={ this._registrationAction }
                        value='Register' />
                </div>
                { errorMessage }

                <div>
                    <Text>Got an account already?</Text>
                    <Link
                        clickEvent={  this.props.setPage }
                        display='block'>
                        Log in!
                    </Link>
                </div>
            </div>
        );
    }
}

RegistrationPage.propTypes = {
    userStoreInfo: React.PropTypes.object
}

RegistrationPage.defaultProps = {
    userStoreInfo: {}
}
