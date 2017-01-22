import AltInstance from '../alt';

import TokenActions from 'actions/TokenActions';

/**
 * Holds the current user's info or error info on failed login
 * or registering.
 */
class UserStore {

    constructor() {
        this.userInfo = {};
        this.error = {};
        this.bindListeners({
            setUserInfo: TokenActions.AUTHENTICATION_SUCCEEDED,
            setErrorMessage: TokenActions.AUTHENTICATION_FAILED,
            loseUserInfo: TokenActions.LOGOUT
        });
    }

    setUserInfo(userInfo = {}) {
        this.userInfo = userInfo;
    }

    setErrorMessage(error = {}) {
        this.error = error;
    }

    loseUserInfo() {
        this.userInfo = {};
        this.error = {};
    }


}

export default AltInstance.createStore(UserStore, 'UserStore');
