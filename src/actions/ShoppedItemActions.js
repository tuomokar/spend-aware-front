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
        return () => {
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
