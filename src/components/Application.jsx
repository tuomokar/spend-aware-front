import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Header from 'components/organisms/Header';
import Page from 'components/organisms/Page';
import Styles from 'constants/Styles';

/**
 * The root of the application
 */
export default class Application extends React.Component {

    render() {
        return (
            <div className={ css(styles.root) }>
                <Header />
                <Page />
            </div>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: Styles.colors.siteBackgroundColor,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    }
});
