import React from 'react'

import ItemRow from 'components/molecules/ItemRow';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import ShoppedItemStore from 'stores/ShoppedItemStore';


/**
 * A component for listing the shopped items.
 */
export default class ItemList extends React.Component {

    constructor() {
        super();
    }

    _renderItems(items = [], chosenItem) {
        if (!items || items.length === 0) {
            return <Text>No items for you at the moment</Text>;
        }

        return (
            items.map((item, index) => {
                let open = false;
                if (chosenItem && chosenItem.name === item.name) {
                    open = true;
                    item = chosenItem;
                }

                return (
                    <ItemRow
                        identification={ `item-${index}-${item.name}`}
                        isOpen={ open }
                        key={ item.name }>
                        { item }
                    </ItemRow>
                );
            })
        );
    }

    render() {
        let items = this._renderItems(this.props.items, this.props.chosenItem);

        return (
            <div>
                <Title level={3}>Current items</Title>
                <div>
                    { items }
                </div>
            </div>
        );
    }
}



ItemList.propTypes = {
    chosenItem: React.PropTypes.object,
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    })).isRequired
}
