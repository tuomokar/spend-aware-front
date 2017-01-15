import React from 'react'

import Item from 'components/atoms/Item';

/**
 * A basic text component.
 */
export default class ItemList extends React.Component {

    _renderItems(items) {
        return items.map((item, index) => {
            return <Item key={ index }>{ item }</Item>;
        });
    }

    _getMockData() {
        return [
            {
                name: 'milk'
            },
            {
                name: 'bread'
            }
        ];
    }

    render() {
        let items = this._renderItems(this._getMockData());

        return (
            <div>
                { items }
            </div>
        );
    }
}



ItemList.propTypes = {
    children: React.PropTypes.array//.isRequired
}
