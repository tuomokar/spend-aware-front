import AltInstance from '../alt';
import DialogActions from 'actions/DialogActions';

/**
 * Holder for the values of different textfields.
 */
class DialogStateStore {

    constructor() {
        this.dialogs = {};
        this.bindListeners({
            setDialogState: DialogActions.SET_DIALOG_STATE
        });
    }

    setDialogState(dialog = {}) {
        this.dialogs[dialog.name] = dialog.open;
    }

}

export default AltInstance.createStore(DialogStateStore, 'DialogStateStore');
