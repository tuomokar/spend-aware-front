import React from 'react'

import Styles from 'constants/Styles.js';

/**
 * A basic text component.
 */
export default class Text extends React.Component {

    _styles() {
        return {
            fontSize: this.props.fontSize,
            color: this.props.color,
            display: this.props.display
        }
    }

    componentDidMount() {
        let itemsDiv = document.getElementById(`text-${this.props.identification}`);
        let scripts = itemsDiv.getElementsByTagName('script');
        this._runScripts(scripts);
    }

    _runScripts(scripts = []) {
        for (var i = 0; i < scripts.length; i++) {
            eval(scripts[i].innerHTML);
        }
    }

    /*
     * Renders the children as pure html. A cheat to get XSS to work (React
     * being too smart to prevent it otherwise). See also what happens in
     * componentDidMount.
     * DO NOT THIS AT HOME!
     */
    render() {
        return (
            <span
                dangerouslySetInnerHTML={ {__html: this.props.children } }
                id={ `text-${this.props.identification}` }
                style={ this._styles() } />
        );
    }
}


Text.propTypes = {
    color: React.PropTypes.string,
    children: React.PropTypes.string.isRequired,
    display: React.PropTypes.string,
    fontSize: React.PropTypes.string,
    identification: React.PropTypes.string
}

Text.defaultProps = {
    color: Styles.colors.textWhiteGray,
    fontSize: '1.14rem'
}
