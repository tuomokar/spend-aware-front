import React from 'react';

import Styles from 'constants/Styles';


/**
 * Renders an icon of your choosing. You can use Google's material design
 * icons.
 */
export default class Icon extends React.Component {

    _styles() {
        return {
            color: this.props.color
        }
    }

    render() {
        return (
            <i
                className="material-icons"
                style={ this._styles() }>
                { this.props.children }
            </i>
        );
    }
}



Icon.propTypes = {
    children: React.PropTypes.string.isRequired,
    color: React.PropTypes.string
}

Icon.defaultProps = {
    color: Styles.colors.submitButtonOrange
}
