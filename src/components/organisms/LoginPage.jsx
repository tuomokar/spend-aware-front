import React from 'react'

import LoginForm from 'components/molecules/LoginForm';
import Styles from 'constants/Styles';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';


/**
 * Shows a login form.
 */
export default class LoginPage extends React.Component {

    _styles() {
        return {
            display: 'flex',
            flexDirection: 'column'
        }
    }

    _renderFailedLoginMessage(error) {
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
        let userStoreInfo = this.props.userStoreInfo;
        let errorMessage = this._renderFailedLoginMessage(userStoreInfo.error);

        return (
            <div style={ this._styles() }>
                <Title level={2}>Login</Title>
                <LoginForm />
                { errorMessage }
            </div>
        );
    }
}

LoginPage.propTypes = {
    userStoreInfo: React.PropTypes.object
}

LoginPage.defaultProps = {
    userStoreInfo: {}
}
