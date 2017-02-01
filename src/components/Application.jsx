import React from 'react'

import Header from 'components/organisms/Header';
import Page from 'components/organisms/Page';
import Styles from 'constants/Styles';
import UserStore from 'stores/UserStore';


/**
 * The root of the application.
 */
export default class Application extends React.Component {

    constructor() {
        super();
        this.state = UserStore.getState();
    }

    componentDidMount() {
        UserStore.listen(this._onChange.bind(this));
    }

    componentWillUnmount() {
        UserStore.unlisten(this._onChange.bind(this));
    }

    _onChange(state) {
        this.setState(state);
    }

    _userLoggedIn(userInfo) {
        return userInfo && userInfo.username;
    }

    _styles() {
        return {
            backgroundColor: Styles.colors.siteBackgroundColor,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row'
        };
    }

    _renderPageWithoutHeader() {
        return (
            <div style={ this._styles() }>
                <Page />
            </div>
        );
    }

    render() {
        if (!this._userLoggedIn(this.state.userInfo)) {
            return this._renderPageWithoutHeader();
        }

        return (
            <div style={ this._styles() }>
                <Header />
                <Page />
            </div>
        );
    }
}
