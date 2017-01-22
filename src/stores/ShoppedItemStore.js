import AltInstance from '../alt';
import ShoppedItemActions from 'actions/ShoppedItemActions';

class ShoppedItemStore {

    constructor() {
        this.shoppedItems = [];
        this.errorMessage = null;

        this.bindListeners({
            handleUpdateShoppedItems: ShoppedItemActions.UPDATE_SHOPPED_ITEMS,
            handleFetchShoppedItems: ShoppedItemActions.FETCH_SHOPPED_ITEMS,
            handleShoppedItemsFailed: ShoppedItemActions.SHOPPED_ITEMS_FAILED
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
}

export default AltInstance.createStore(ShoppedItemStore, 'ShoppedItemStore');
