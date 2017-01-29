import 'whatwg-fetch';
import config from 'config';

let apiUrl = `${config.baseApiUrl}items`;

/*
 * API for /items
 */
let ShoppedItemSource = {

    fetch: () => {
        return new Promise(resolve => {
            fetch(apiUrl)
                .then(response => {
                    return response.json();
                }).then(json =>  {
                    resolve(json);
                }).catch(ex => {
                    throw `parsing failed ${ex}`;
                })
        });
    },


    create: (item, userId) => {
        return new Promise(resolve => {
            fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    item: item,
                    user: {
                        id: userId
                    }
                })
            })
            .then(res => {
                return res.json();
            })
            .then(json => {
                resolve(json);
            })
            .catch(ex => {
                throw `parsing failed ${ex}`;
            })
        })
    }

};

module.exports = ShoppedItemSource;
