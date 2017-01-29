import AltInstance from '../alt';
import DialogActions from 'actions/DialogActions';
import ShoppedItemSource from 'sources/ShoppedItemSource';
import TextInputActions from 'actions/TextInputActions';
import UserSource from 'sources/UserSource';

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
                    this.setCollectiveInfoOnItem(null);
                })
                .then(() => {
                    this.fetchShoppedItems(userId);
                })
                .catch(error => {
                    this.shoppedItemsFailed(error);
                });
        };
    }

    updateShoppedItems(shoppedItems) {
        return shoppedItems;
    }

    fetchShoppedItems(userId) {
        return () => {
            UserSource.fetchItemsOfUser(userId)
                .then(shoppedItems => {
                    this.updateShoppedItems(shoppedItems);
                })
                .catch(errorMessage => {
                    this.shoppedItemsFailed(errorMessage);
                });
        }
    }

    fetchCollectiveInfoOnItem(userId, itemName) {
        return () => {
            UserSource.fetchCollectiveInfoOnItem(userId, itemName)
                .then(item => {
                    this.setCollectiveInfoOnItem(item);
                })
                .catch(errorMessage => {
                    this.shoppedItemsFailed(errorMessage);
                });
        }
    }

    setCollectiveInfoOnItem(item) {
        return item;
    }

    shoppedItemsFailed(errorMessage) {
        return errorMessage;
    }
}

export default AltInstance.createActions(ShoppedItemActions);
