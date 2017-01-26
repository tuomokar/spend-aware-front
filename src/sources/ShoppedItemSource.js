import 'whatwg-fetch';
import config from 'config';

let apiUrl = `${config.baseApiUrl}items`;
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

    create: (item) => {
        return new Promise(resolve => {
            fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: item.name
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
