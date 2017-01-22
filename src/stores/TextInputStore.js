import AltInstance from '../alt';
import TextInputActions from 'actions/TextInputActions';

/**
 * Holder for the values of different textfields.
 */
class TextInputStore {

    constructor() {
        this.textInputs = {};
        this.bindListeners({
            handleUpdateTextInput: TextInputActions.UPDATE_TEXT_INPUT
        });
    }

    handleUpdateTextInput(newInput = {}) {
        this.textInputs[newInput.key] = newInput.value;
    }


}

export default AltInstance.createStore(TextInputStore, 'TextInputStore');
