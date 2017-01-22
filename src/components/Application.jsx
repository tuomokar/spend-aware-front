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

    _userRegistering() {
        // TODO create a page for registering
    }

    _userLoggedIn(userInfo) {
        if (!userInfo || !userInfo.username) {
            return false;
        }
        return true;
    }

    _renderLoginPage() {
        return (
            <div style={ this._styles() }>
                <Page
                    page='login'
                    userStoreInfo={ this.state } />
            </div>
        );
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

    render() {
        let userInfo = this.state.userInfo;

        if (this._userLoggedIn(userInfo) === false) {
            return this._renderLoginPage();
        }

        return (
            <div style={ this._styles() }>
                <Header />
                <Page
                    page='items'
                    userStoreInfo={ this.state }/>
            </div>
        );
    }
}
