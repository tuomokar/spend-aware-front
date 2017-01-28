import AltInstance from '../alt';
import DialogActions from 'actions/DialogActions';
import ShoppedItemSource from 'sources/ShoppedItemSource';
import TextInputActions from 'actions/TextInputActions';

class ShoppedItemActions {

    createShoppedItem(shoppedItem, userId) {
        return () => {
            ShoppedItemSource.create(shoppedItem, userId)
                .then(() => {
                    TextInputActions.resetTextInput('newItemName');
                })
                .then(() => {
                    DialogActions.setDialogState({
                        name: 'itemCreation',
                        open: false
                    });
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
