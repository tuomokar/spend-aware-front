import React from 'react'

import Empty from 'components/atoms/Empty';
import Item from 'components/atoms/Item';

/**
 * A component for listing the shopped items.
 */
export default class ItemList extends React.Component {

    _renderItems(items = []) {
        if (items.length === 0) {
            return <Empty />;
        }

        return items.map(item => {
            return <Item key={ item.id }>{ item }</Item>;
        });
    }

    render() {
        let items = this._renderItems(this.props.items);

        return (
            <div>
                { items }
            </div>
        );
    }
}



ItemList.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    })).isRequired
}
