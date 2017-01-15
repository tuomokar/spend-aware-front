import React from 'react'

import Text from 'components/atoms/Text';

/**
 * Represents a single shopped item.
 */
export default class Item extends React.Component {

    render() {
        let item = this.props.children;
        return (
            <div>
                <Text>{ item.name }</Text>
            </div>
        );
    }
}

Item.propTypes = {
    children: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    }).isRequired
}
