import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Styles from 'constants/Styles';

/**
 * Handles what content is shown on the page
 */
export default class Page extends React.Component {

    render() {
        return (
            <div className={ css(styles.root) }>
                <div className={ css(styles.container) }>
                    Page content will come here
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        margin: 'auto',
        maxWidth: '1200px',
        height: `calc(100% - ${Styles.layout.headerMargin} - ${Styles.layout.topPadding})`,
        display: 'flex',
        flexDirection: 'column',
        marginTop: `calc(${Styles.layout.headerMargin} + ${Styles.layout.topPadding})`,
        width: '100%'
    },
    container: {
        paddingLeft: '25px'
    }
});
