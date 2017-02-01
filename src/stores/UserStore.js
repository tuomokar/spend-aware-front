import AltInstance from '../alt';

import UserActions from 'actions/UserActions';

/**
 * Holds the current user's info or error info on failed login
 * or registering.
 */
class UserStore {

    constructor() {
        this.userInfo = {};
        this.error = {};
        this.bindListeners({
            setUserInfo: UserActions.AUTHENTICATION_SUCCEEDED,
            setLoginError: UserActions.AUTHENTICATION_FAILED,
            setRegistrationError: UserActions.REGISTRATION_FAILED,
            loseUserInfo: UserActions.LOGOUT
        });
    }

    setUserInfo(userInfo = {}) {
        this.userInfo = userInfo;
    }

    setRegistrationError(error = {}) {
        this.error = error;
    }

    setLoginError(error = {}) {
        this.error = error;
    }

    loseUserInfo() {
        this.userInfo = {};
        this.error = {};
    }


}

export default AltInstance.createStore(UserStore, 'UserStore');
