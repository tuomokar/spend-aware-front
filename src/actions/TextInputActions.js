import AltInstance from '../alt';

/**
 * Handles actions related to any text fields, such as the value
 * of a text field changing.
 */
class TextInputActions {

    /**
     * Takes in an object with fields 'key' and 'value',
     * with the 'key' being the "purpose" of the field (
     * for example username) and the 'value' being the
     * new value in the text field.
     */
    updateTextInput(inputWithKeyAndValue = {}) {
        return inputWithKeyAndValue;
    }

    resetTextInput(field) {
        return field;
    }
}

export default AltInstance.createActions(TextInputActions);
