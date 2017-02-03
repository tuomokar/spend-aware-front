import React from 'react'

import Button from 'components/atoms/Button';
import Dialog from 'components/molecules/Dialog';
import DialogActions from 'actions/DialogActions';
import DialogStateStore from 'stores/DialogStateStore';
import ItemCreationForm from 'components/molecules/ItemCreationForm';
import ItemList from 'components/molecules/ItemList';
import ShoppedItemStore from 'stores/ShoppedItemStore';
import ShoppedItemActions from 'actions/ShoppedItemActions';
import TextInputActions from 'actions/TextInputActions';
import TextInputStore from 'stores/TextInputStore';
import UserStore from 'stores/UserStore';


/**
 * Handles the content of the items page.
 */
export default class ItemsPage extends React.Component {

    constructor() {
        super();
        this.state = ShoppedItemStore.getState();
    }

    componentDidMount() {
        ShoppedItemStore.listen(this._onChange.bind(this));
        TextInputStore.listen(this._onChange.bind(this));
        DialogStateStore.listen(this._onChange.bind(this));

        this._fetchItemsOfUser();
        DialogActions.setDialogState('itemCreation', false);
        this.mounted = true;
    }

    _fetchItemsOfUser() {
        let userId = UserStore.getState().userInfo.userId;
        ShoppedItemActions.fetchShoppedItems(userId);
    }

    componentWillUnmount() {
        ShoppedItemStore.unlisten(this._onChange.bind(this));
        TextInputStore.unlisten(this._onChange.bind(this));
        DialogStateStore.unlisten(this._onChange.bind(this));
        this.mounted = false;
    }

    _onChange(state) {
        if (this.mounted === false) {
            return;
        }
        this.setState(state);
    }

    _noItems(items = []) {
        return items.length === 0;
    }

    _addItem() {
        let inputs = TextInputStore.getState().textInputs;
        let name = inputs.newItemName;
        let cost = inputs.newItemCost;
        if (!name || name.trim() === '' || !cost) {
            return;
        }
        let userId = UserStore.getState().userInfo.userId;
        ShoppedItemActions.createShoppedItem({
             name: name,
             cost: cost
        }, userId);
    }

    _styles() {
        return {
            display: 'flex',
            flexDirection: 'column'
        };
    }

    _newShoppedItemNameInput(event, value) {
        TextInputActions.updateTextInput({
            key: 'newItemName',
            value: value
        });
    }

    _closeDialog() {
        DialogActions.setDialogState({
            name: 'itemCreation',
            open: false
        });
    }

    _openDialog() {
        DialogActions.setDialogState({
            name: 'itemCreation',
            open: true
        });
    }

    _renderDialog() {
        if (!this.state.dialogs || !this.state.dialogs['itemCreation']) {
            return;
        }

        return (
            <Dialog
                closeAction={ this._closeDialog }
                open={ this.state.dialogs['itemCreation'] }
                submitAction={ this._addItem }
                title='Post new item'>
                <ItemCreationForm />
            </Dialog>
        );
    }

    render() {
        let items = this.state.shoppedItems;

        return (
            <div style={ this._styles() }>
                <div>
                    <Button
                        clickEvent={ this._openDialog }
                        value='Add new' />
                </div>
                <ItemList
                    items={ items }
                    chosenItem={ this.state.chosenItem } />
                { this._renderDialog() }
            </div>
        );
    }
}
