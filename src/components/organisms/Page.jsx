import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import ItemsPage from 'components/organisms/ItemsPage';
import Styles from 'constants/Styles';
import Title from 'components/atoms/Title';


/**
 * Handles what content is shown on the page.
 */
export default class Page extends React.Component {

    render() {
        return (
            <div className={ css(styles.content) }>
                <div className={ css(styles.paddingContainer) }>
                    <Title level={ 1 }>SpendAware</Title>
                    <ItemsPage />
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
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
});
