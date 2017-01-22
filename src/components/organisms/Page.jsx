import React from 'react'

import ItemsPage from 'components/organisms/ItemsPage';
import LoginPage from 'components/organisms/LoginPage';
import Logo from 'components/atoms/Logo';
import Styles from 'constants/Styles';


/**
 * Handles what content is shown on the page.
 */
export default class Page extends React.Component {

    _pageComponent() {
        return {
            items: <ItemsPage userStoreInfo={ this.props.userStoreInfo } />,
            login: <LoginPage userStoreInfo={ this.props.userStoreInfo } />
        };
    }

    _styles() {
        return {
            content: {
                margin: 'auto',
                maxWidth: '1200px',
                height: `calc(100% - ${Styles.layout.headerMargin} - ${Styles.layout.topPadding})`,
                display: 'flex',
                flexDirection: 'column',
                marginTop: `calc(${Styles.layout.headerHeight} + ${Styles.layout.topPadding})`,
                width: '100%'
            },
            paddingContainer: {
                paddingLeft: '25px'
            }
        }
    }

    render() {
        let page = this._pageComponent()[this.props.page];

        return (
            <div style={ this._styles().content }>
                <div style={ this._styles().paddingContainer }>
                    <Logo />
                    { page }
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    page: React.PropTypes.string,
    userStoreInfo: React.PropTypes.object
}

React.defaultPropTypes = {
    page: 'items',
    userStoreInfo: {}
}
