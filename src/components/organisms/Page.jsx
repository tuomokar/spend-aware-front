import React from 'react'

import ItemsPage from 'components/organisms/ItemsPage';
import LoginPage from 'components/organisms/LoginPage';
import Logo from 'components/atoms/Logo';
import PageActions from 'actions/PageActions';
import PageStore from 'stores/PageStore';
import RegistrationPage from 'components/organisms/RegistrationPage';
import Styles from 'constants/Styles';


/**
 * Handles what content is shown on the page.
 */
export default class Page extends React.Component {

    constructor() {
        super();
        this.state = PageStore.getState();
        this.mounted = false;
    }

    componentDidMount() {
        PageStore.listen(this._onChange.bind(this));
        this.mounted = true;
    }

    componentWillUnmount() {
        PageStore.unlisten(this._onChange.bind(this));
        this.mounted = false;
    }

    /*
     * Some flaw here that results in the page state getting changed more than
     * it should, and every now and then for some reason it thinks it's not
     * mounted.
     */
    _onChange(state) {
        if (!this.mounted) {
            return;
        }
        this.setState(state);
    }

    _pageComponent() {
        return {
            items: <ItemsPage />,
            login: <LoginPage setPage={ this._toRegisterPage } />,
            register: <RegistrationPage setPage={ this._toLoginPage } />
        };
    }

    _toRegisterPage() {
        PageActions.setPage('register');
    }

    _toLoginPage() {
        PageActions.setPage('login');
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
        let page = this._pageComponent()[this.state.page];

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
    page: React.PropTypes.string
}

React.defaultPropTypes = {
    page: 'items'
}
