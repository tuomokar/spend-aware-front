import AltInstance from '../alt';
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
            dispatch(); // dispatch here to get "loading" state
            ShoppedItemSource.fetch()
                .then(shoppedItems => {
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
