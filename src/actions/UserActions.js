import AltInstance from '../alt';

import PageActions from 'actions/PageActions';
import TextInputActions from 'actions/TextInputActions';
import TokenSource from 'sources/TokenSource';
import UserSource from 'sources/UserSource';


/**
 * Handles functions related to user account, such as registering
 * and logging in.
 */
class UserActions {

    attemptToAuthenticate(userInfo) {
        return dispatch => {
            dispatch();
            TokenSource.sendAuthenticationInfo(userInfo)
                .then(authentication => {
                    this.handleAuthenticationAttempt(authentication);
                })
                .catch(errorMessage => {
                    this.authenticationFailed(errorMessage);
                })
        };
    }

    register(userInfo) {
        return dispatch => {
            dispatch();
            UserSource.register(userInfo)
                .then(registrationInfo => {
                    this.handleRegistrationAttempt(registrationInfo);
                })
                .catch(err => {
                    this.registrationFailed(err);
                })
        }
    }

    registrationSucceeded(registrationInfo = {}) {
        this.attemptToAuthenticate(registrationInfo);
        TextInputActions.resetAllFields();
        return registrationInfo;
    }

    handleRegistrationAttempt(registrationInfo = {}) {
        if (registrationInfo.success === true) {
            this.registrationSucceeded(registrationInfo);
        } else {
            this.registrationFailed(registrationInfo);
        }
    }

    registrationFailed(error) {
        return error;
    }

    handleAuthenticationAttempt(authenticationInfo = {}) {
        if (authenticationInfo.success === true) {
            this.authenticationSucceeded(authenticationInfo);
            PageActions.setPage('items');
        } else {
            this.authenticationFailed(authenticationInfo);
        }
    }

    authenticationSucceeded(authenticationInfo = {}) {
        TextInputActions.resetAllFields();
        return authenticationInfo;
    }V

    authenticationFailed(errorMessage) {
        return errorMessage;
    }

    logout() {
        TextInputActions.resetAllFields();
        PageActions.setPage('register');
        return '';
    }
}

export default AltInstance.createActions(UserActions);
