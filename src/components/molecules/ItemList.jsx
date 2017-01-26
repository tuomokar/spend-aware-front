import React from 'react'

import Empty from 'components/atoms/Empty';
import Item from 'components/atoms/Item';
import Title from 'components/atoms/Title';


/**
 * A component for listing the shopped items.
 */
export default class ItemList extends React.Component {

    _renderItems(items = []) {
        if (items.length === 0) {
            return <Empty />;
        }

        return (
             items.map(item => <Item key={ item.id }>{ item }</Item>)
        );

    }

    _runScripts(scripts = []) {
        for (var i = 0; i < scripts.length; i++) {
            eval(scripts[i].innerHTML);
        }
    }

    /*
     * A cheat to get XSS to work (React being too smart to prevent it otherwise)
     * See also Text component.
     * DO NOT THIS AT HOME!
     */
    componentDidMount() {
        let itemsDiv = document.getElementById('items-render');
        let scripts = itemsDiv.getElementsByTagName('script');
        this._runScripts(scripts);
    }

    render() {
        let items = this._renderItems(this.props.items);

        return (
            <div>
                <Title level={3}>Current items</Title>
                <div id='items-render'>
                    { items }
                </div>
            </div>
        );
    }
}



ItemList.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    })).isRequired
}
