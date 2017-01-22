import AltInstance from '../alt';

import TokenSource from 'sources/TokenSource';

/**
 * Handles logging in and out by getting a json web token
 * from the server or asking the store to lose it.
 */
class TokenActions {

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

    handleAuthenticationAttempt(authenticationInfo = {}) {
        if (authenticationInfo.success === true) {
            this.authenticationSucceeded(authenticationInfo);
        } else {
            this.authenticationFailed(authenticationInfo);
        }
    }

    authenticationSucceeded(authenticationInfo = {}) {
        return authenticationInfo;
    }

    authenticationFailed(errorMessage) {
        return errorMessage;
    }

    logout() {
        return '';
    }
}

export default AltInstance.createActions(TokenActions);
