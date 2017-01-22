import React from 'react'

import LeafImage from '../../images/leaf.png';
import Image from 'components/atoms/Image';
import Styles from 'constants/Styles';
import Title from 'components/atoms/Title';

/**
 * Logo of the site.
 */
export default class Logo extends React.Component {

    _styles() {
        return {
            marginLeft: '10%',
            display: 'flex',
            alignItems: 'center'
        }
    }

    render() {
        return (
            <span style={ this._styles() }>
                <Image
                    altText='Leaf logo'
                    height={ Styles.layout.headerHeight }>
                    { LeafImage }
                </Image>
                <Title
                    display='inline'
                    margin={ '0 0 0 15px' }>
                    SpendAware - Wellness Through Awareness
                </Title>
            </span>
        );
    }
}
