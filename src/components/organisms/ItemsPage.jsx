import React from 'react'

import Empty from 'components/atoms/Empty';
import Button from 'components/atoms/Button';
import ItemList from 'components/molecules/ItemList';
import ShoppedItemStore from 'stores/ShoppedItemStore';
import ShoppedItemActions from 'actions/ShoppedItemActions';
import TextField from 'components/atoms/TextField';
import TextInputActions from 'actions/TextInputActions';
import TextInputStore from 'stores/TextInputStore';


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
        ShoppedItemActions.fetchShoppedItems();
    }

    componentWillUnmount() {
        ShoppedItemStore.unlisten(this._onChange.bind(this));
        TextInputStore.unlisten(this._onChange.bind(this));
    }

    _onChange(state) {
        this.setState(state);
    }

    _noItems(items = []) {
        return items.length === 0;
    }

    _addItem() {
        let name = TextInputStore.getState().textInputs.newItemName;
        if (name === undefined || name.trim() === '') {
            return;
        }
        ShoppedItemActions.createShoppedItem({
             name: name
        });
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

    render() {
        let items = this.state.shoppedItems;
        if (this._noItems(items)) {
            return <Empty />;
        }

        return (
            <div style={ this._styles() }>
                <div>
                    <TextField
                        onChangeAction={ this._newShoppedItemNameInput }
                        value={ TextInputStore.getState().textInputs.newItemName }
                        placeholder='Add info on newly shopped item'
                        width='20rem' />
                    <Button
                        clickEvent={ this._addItem }
                        value='Add new' />
                </div>
                <ItemList items={ items }/>

            </div>
        );
    }
}
