import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';


/**
 * Renders an image. Give the image source as the child.
 */
export default class Image extends React.Component {

    _styles() {
        return StyleSheet.create({
            image: {
                height: this.props.height
            }
        });
    }

    render() {
        return (
            <img
                className={ css(this._styles().image) }
                src={ this.props.children } />
        );
    }
}



Image.propTypes = {
    children: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired
}
