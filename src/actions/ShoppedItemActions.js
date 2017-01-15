import AltInstance from '../alt';
import 'whatwg-fetch';

import ShoppedItemSource from 'sources/ShoppedItemSource';

class ShoppedItemActions {

    createShoppedItem(shoppedItem) {
        return shoppedItem;
    }

    updateShoppedItems(shoppedItems) {
        return shoppedItems;
    }

    fetchShoppedItems() {
        return dispatch => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            ShoppedItemSource.fetch()
                .then(shoppedItems => {
                    // we can access other actions within our action through `this.actions`
                    this.updateShoppedItems(shoppedItems);
            })
                .catch(errorMessage => {
                    this.shoppedItemsFailed(errorMessage);
            });
        }
    }

    shoppedItemsFailed(errorMessage) {
        return errorMessage;
    }
}

export default AltInstance.createActions(ShoppedItemActions);
