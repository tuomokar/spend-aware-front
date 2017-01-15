import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import Styles from 'constants/Styles.js';

/**
 * Title component. Give the level number as props.
 */
export default class Title extends React.Component {

    _titleLevel() {
        let content = this.props.children;
        let style = css(this._styles().title);
        return {
            1: <h1 className={ style }>{ content }</h1>,
            2: <h2 className={ style }>{ content }</h2>,
            3: <h3 className={ style }>{ content }</h3>
        }
    }

    _styles() {
        return StyleSheet.create({
            title: {
                color: this.props.color,
                display: this.props.display,
                margin: this.props.margin
            }
        });
    }

    render() {
        let component = this._titleLevel()[this.props.level];
        return component;
    }
}



Title.propTypes = {
    children: React.PropTypes.string.isRequired,
    color: React.PropTypes.string,
    level: React.PropTypes.number.isRequired,
    display: React.PropTypes.string,
    margin: React.PropTypes.string
}

Title.defaultProps = {
    color: Styles.colors.textWhiteGray,
    level: 1,
    display: undefined,
    margin: undefined
}
