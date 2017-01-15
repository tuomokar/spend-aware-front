import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Empty from 'components/atoms/Empty';
import Button from 'components/atoms/Button';
import ItemList from 'components/molecules/ItemList';
import ShoppedItemStore from 'stores/ShoppedItemStore';
import ShoppedItemActions from 'actions/ShoppedItemActions';


/**
 * Handles what content is shown on the page.
 */
export default class ItemsPage extends React.Component {

    constructor() {
        super();
        this.state = ShoppedItemStore.getState();
    }

    componentDidMount() {
        ShoppedItemStore.listen(this.onChange.bind(this));
        ShoppedItemActions.fetchShoppedItems();
    }

    componentWillUnmount() {
        ShoppedItemStore.unlisten(this.onChange.bind(this));
    }

    onChange(state) {
        this.setState(state);
    }

    _noItems(items = []) {
        if (items.length > 0) {
            return false;
        }
    }

    render() {
        let items = this.state.shoppedItems;
        if (this._noItems(items)) {
            return <Empty />;
        }

        return (
            <div className={ css(styles.itemsPageRoot) }>
                <ItemList items={ items }/>
                <Button value='Add new' />
            </div>
        );
    }
}

const styles = StyleSheet.create({
    itemsPageRoot: {
        display: 'flex',
        flexDirection: 'column'
    }
});
