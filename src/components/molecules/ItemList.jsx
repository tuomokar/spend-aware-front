import React from 'react'

import Empty from 'components/atoms/Empty';
import ItemRow from 'components/molecules/ItemRow';
import Title from 'components/atoms/Title';
import ShoppedItemStore from 'stores/ShoppedItemStore';


/**
 * A component for listing the shopped items.
 */
export default class ItemList extends React.Component {

    constructor() {
        super();
        this.state = ShoppedItemStore.getState();
    }

    componentWillUnmount() {
        ShoppedItemStore.unlisten(this._onChange.bind(this));
    }

    _onChange(state) {
        this.setState(state);
    }

    _renderItems(items = []) {
        if (items.length === 0) {
            return <Empty />;
        }

        let chosenItem = this.state.chosenItem;
        return (
            items.map(item => {
                let open = false;
                if (chosenItem && chosenItem.name === item.name) {
                    open = true;
                    item = chosenItem;
                }

                return (
                    <ItemRow
                        isOpen={ open }
                        key={ item.name }>
                        { item }
                    </ItemRow>
                );
            })
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
        ShoppedItemStore.listen(this._onChange.bind(this));

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
