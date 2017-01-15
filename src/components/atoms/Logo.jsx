import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import LeafImage from '../../images/leaf.png';
import Image from 'components/atoms/Image';
import Styles from 'constants/Styles';
import Title from 'components/atoms/Title';

/**
 * Logo of the site.
 */
export default class Logo extends React.Component {

    render() {
        return (
            <span className={ css(styles.logoContainer )}>
                <Image
                    altText='Leaf logo'
                    height={ Styles.layout.headerHeight }>
                    { LeafImage }
                </Image>
                <Title
                    level={ 2 }
                    display={'inline'}
                    margin={ '0 0 0 15px'}>
                    SpendAware - Wellness Through Awareness
                </Title>
            </span>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        marginLeft: '10%',
        display: 'flex',
        alignItems: 'center'
    }
})
