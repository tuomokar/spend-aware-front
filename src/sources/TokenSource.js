import 'whatwg-fetch';
import config from 'config';

let apiUrl = `${config.baseApiUrl}authenticate`;

/**
 * Handles requests for web tokens from /api/authenticate.
 */
let TokenSource = {

    sendAuthenticationInfo: (userInfo) => {
        return new Promise(resolve => {
            fetch(apiUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: userInfo.username,
                    password: userInfo.password
                })
            }).then(res => {
                return res.json();
            }).then(json => {
                resolve(json);
            }).catch(exc => {
                throw `parsing failed ${exc}`;
            });
        });
    }
};

module.exports = TokenSource;
