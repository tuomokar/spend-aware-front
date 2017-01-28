import React from 'react'

import Styles from 'constants/Styles';
import TextField from 'components/atoms/TextField';
import TextInputActions from 'actions/TextInputActions';
import TextInputStore from 'stores/TextInputStore';


/**
 * Handles creating new item.
 */
export default class ItemCreationForm extends React.Component {

    constructor() {
        super();
        this.state = TextInputStore.getState();
        this.componentMounted = false;
    }

    componentDidMount() {
        TextInputStore.listen(this._onChange.bind(this));
        this.componentMounted = true;
    }

    componentWillUnmount() {
        TextInputStore.unlisten(this._onChange.bind(this));
        this.componentMounted = false;
    }

    _onChange(state) {
        // There's some bug here that causes the component to call this method
        // twice when the user writes anything in the input fields of the form
        // after the component has unmounted once and then re-mounted.
        // In that scenario when the method gets called twice, the first time
        // it happens the component is supposedly unmounted (which doesn't
        // seem to make sense) and the second time it's mounted as it should be.
        // TODO: lookup why this happens, perhaps some design flaw?
        if (!this.componentMounted) {
            return;
        }
        this.setState(state);
    }

    _itenNameInput(event, value) {
        TextInputActions.updateTextInput({
            key: 'newItemName',
            value: value
        });
    }

    _itemCostInput(event, value) {
        TextInputActions.updateTextInput({
            key: 'newItemCost',
            value: value
        });
    }

    _styles() {
        return {
            display: 'flex',
            flexDirection: 'column'
        };
    }

    render() {
        let textColor = Styles.colors.textFieldAlmostBlack;

        return (
            <div style={ this._styles() }>
                <TextField
                    onChangeAction={ this._itenNameInput }
                    value={ this.state.textInputs.newItemName }
                    placeholder='Name'
                    textColor={ textColor }
                    width='20rem' />
                <TextField
                    onChangeAction={ this._itemCostInput }
                    value={ this.state.textInputs.newItemCost }
                    placeholder='Cost'
                    textColor={ textColor }
                    width='20rem' />
            </div>
        );
    }
}
