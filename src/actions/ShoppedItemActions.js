import AltInstance from '../alt';
import ShoppedItemSource from 'sources/ShoppedItemSource';
import TextInputActions from 'actions/TextInputActions';

class ShoppedItemActions {

    createShoppedItem(shoppedItem) {
        return () => {
            ShoppedItemSource.create(shoppedItem)
                .then(() => {
                    TextInputActions.resetTextInput('newItemName');
                })
                .then(() => {
                    this.fetchShoppedItems();
                })
                .catch(error => {
                    this.shoppedItemsFailed(error);
                });
        };
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
