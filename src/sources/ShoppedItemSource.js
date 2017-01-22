import 'whatwg-fetch';
import config from 'config';

let apiUrl = `${config.baseApiUrl}items`;
let ShoppedItemSource = {

    fetch: function () {
        return new Promise(function(resolve) {
            fetch(apiUrl)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    resolve(json);
                }).catch(function(ex) {
                    throw `parsing failed ${ex}`;
                })
        });
    }
};

module.exports = ShoppedItemSource;
