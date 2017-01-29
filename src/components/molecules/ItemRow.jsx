import React from 'react';
import { merge } from 'lodash';
import { StyleSheet, css } from 'aphrodite/no-important';

import Icon from 'components/atoms/Icon';
import Item from 'components/atoms/Item';
import Styles from 'constants/Styles';
import ShoppedItemActions from 'actions/ShoppedItemActions';
import Text from 'components/atoms/Text';
import UserStore from 'stores/UserStore';


/**
 * Container for item in the list of items. Can be expanded.
 */
export default class ItemRow extends React.Component {

    constructor() {
        super();
    }

    _styles() {
        return StyleSheet.create({
            itemContainer: {
                height: '3rem',
                paddingTop: '1rem',
                border: `1px solid ${Styles.colors.headerColor}`,
                cursor: 'pointer',
                margin: '-1px',
                width: '80%',
                ':hover': {
                    backgroundColor: '#263644'
                }
            },
            itemNameContainer: {
                paddingLeft: '1rem'
            },
            itemContainerOpen: {    // merged to itemContainer when the row is open
                height: '6rem',
                paddingTop: '1rem',
                display: 'block',
                '-webkitTransition': 'all 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95)',
                transition: 'all 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95)'
            },
            itemInfo: {
                paddingLeft: '1.5rem'
            }
        });
    }

    _expandRow(event) {
        if (this.props.isOpen) {
            ShoppedItemActions.setCollectiveInfoOnItem(null);
        } else {
            let userId = UserStore.getState().userInfo.userId;
            ShoppedItemActions.fetchCollectiveInfoOnItem(userId, this.props.children.name);
        }

        event.preventDefault();
    }

    _renderExpandedInfo(item) {
        return (
            <div className={ css(this._styles().itemInfo) }>
                <Text display='block'>{ `Cost of last purchase €${item.cost}` }</Text>
                <Text display='block'>{ `Total cost: €${item.totalCost}` }</Text>
                <Text display='block'>{ `Total count of purchases: ${item.count}` }</Text>
            </div>
        );
    }

    _renderRowToggleIcon(isOpen) {
        let icon = 'keyboard_arrow_right';
        if (isOpen) {
            icon = 'keyboard_arrow_down';
        }

        return <Icon>{ icon }</Icon>;
    }

    render() {
        let item = this.props.children;
        let isOpen = this.props.isOpen;
        let rootClassName = this._styles().itemContainer;
        let expandedInfo;

        if (isOpen) {
            rootClassName = merge(rootClassName, this._styles().itemContainerOpen);
            expandedInfo = this._renderExpandedInfo(item);
        }

        return (
            <div
                className={ css(rootClassName) }
                onClick={ this._expandRow.bind(this) }>
                <div className={ css(this._styles().itemNameContainer) }>
                    <div style={{ display: 'flex' }}>
                        { this._renderRowToggleIcon(isOpen) }
                        <Item>{ this.props.children }</Item>
                    </div>
                    { expandedInfo }
                </div>
            </div>
        );
    }
}

ItemRow.propTypes = {
    children: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    }).isRequired,
    isOpen: React.PropTypes.bool
}

ItemRow.defaultProps = {
    isOpen: false
}
