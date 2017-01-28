import AltInstance from '../alt';

/**
 * Handles actions related to any text fields, such as the value
 * of a text field changing.
 */
class DialogActions {

    /**
     * Takes in an object that has keys 'name' and 'open', with the first
     * one being a unique string identifier for the dialog, and the latter one
     * being a boolean value indicating whether the dialog is open or closed.
     */
    setDialogState(dialog = {}) {
        return dialog;
    }
}

export default AltInstance.createActions(DialogActions);
