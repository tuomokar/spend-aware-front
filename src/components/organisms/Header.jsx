import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Logo from 'components/atoms/Logo';
import Styles from 'constants/Styles.js';

/**
 * Handles the header of the page
 */
export default class Application extends React.Component {

    render() {
        return (
            <div className={ css(styles.headerContainer) }>
                <Logo />
            </div>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Styles.colors.headerColor,
        position: 'absolute',
        width: '100%',
        height: Styles.layout.headerHeight
    }
});
