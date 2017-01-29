import AltInstance from '../alt';
import ShoppedItemActions from 'actions/ShoppedItemActions';

class ShoppedItemStore {

    constructor() {
        this.shoppedItems = [];
        this.errorMessage = null;
        this.chosenItem = null;

        this.bindListeners({
            handleUpdateShoppedItems: ShoppedItemActions.UPDATE_SHOPPED_ITEMS,
            handleFetchShoppedItems: ShoppedItemActions.FETCH_SHOPPED_ITEMS,
            handleShoppedItemsFailed: ShoppedItemActions.SHOPPED_ITEMS_FAILED,
            handleCollectiveInfoOnItem: ShoppedItemActions.SET_COLLECTIVE_INFO_ON_ITEM
        });
    }

    handleUpdateShoppedItems(shoppedItems) {
        this.shoppedItems = shoppedItems;
    }

    handleFetchShoppedItems() {
        this.shoppedItems = [];
    }

    handleShoppedItemsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }

    handleCollectiveInfoOnItem(chosenItem) {
        this.chosenItem = chosenItem;
    }
}

export default AltInstance.createStore(ShoppedItemStore, 'ShoppedItemStore');
