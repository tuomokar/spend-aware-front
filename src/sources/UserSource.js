import 'whatwg-fetch';
import config from 'config';

let apiUrl = `${config.baseApiUrl}users`;


/*
 * API for /users
 */
let UserSource = {

    fetchItemsOfUser: (userId) => {
        return new Promise(resolve => {
            fetch(`${apiUrl}/${userId}/items`)
                .then(response => {
                    return response.json();
                }).then(json =>  {
                    resolve(json);
                }).catch(ex => {
                    throw `parsing failed ${ex}`;
                })
        });
    },

    fetchCollectiveInfoOnItem: (userId, itemName) => {
        return new Promise(resolve => {
            fetch(`${apiUrl}/${userId}/items/${itemName}`)
                .then(response => {
                    return response.json();
                }).then(json =>  {
                    resolve(json);
                }).catch(ex => {
                    throw `parsing failed ${ex}`;
                })
        });
    },

    register: (userInfo) => {
        return new Promise(resolve => {
            fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: userInfo.username,
                    password: userInfo.password
                })
            })
            .then(response => {
                return response.json();
            })
            .then(resJson => {
                resolve(resJson);
            })
            .catch(ex => {
                throw `parsing failed ${ex}`;
            })
        });
    }

};

module.exports = UserSource;
