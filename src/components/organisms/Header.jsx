import React from 'react'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Styles from 'constants/Styles.js';
import UserActions from 'actions/UserActions';


/**
 * Handles the header of the page.
 */
export default class Application extends React.Component {

    _renderUserMenu() {
        let iconButtonElement = <IconButton><MoreVertIcon /></IconButton>;
        return (
            <IconMenu
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                iconButtonElement={ iconButtonElement }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <MenuItem primaryText='My Page' />
                    <MenuItem
                        onTouchTap={ this._logoutAction }
                        primaryText='Sign out' />
            </IconMenu>
        );
    }

    _logoutAction() {
        UserActions.logout();
    }

    _styles() {
        return {
            backgroundColor: Styles.colors.headerColor,
            position: 'absolute',
            width: '100%',
            height: Styles.layout.headerHeight,
            display: 'flex',
            flexDirection: 'row'
        }
    }

    render() {
        return (
            <AppBar
                iconElementRight={ this._renderUserMenu() }
                style={ this._styles() } />
        );
    }
}
