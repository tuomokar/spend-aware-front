import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Styles from 'constants/Styles.js';

/**
 * Handles the header of the page
 */
export default class Application extends React.Component {

    render() {
        return (
            <div className={ css(styles.root) }>
                header will come here
            </div>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: Styles.colors.headerColor,
        position: 'absolute',
        width: '100%',
        height: Styles.layout.headerMargin
    }
});
