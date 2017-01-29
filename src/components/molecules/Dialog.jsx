import React from 'react';

import Button from 'components/atoms/Button';
import Dialog from 'material-ui/Dialog';


/**
 * A dialog component. Creates an overlay that can be closed
 * by clicking away from the dialog or by pressing a button.
 * Give the content as children.
 */
export default class DialogOverlay extends React.Component {

    _actionButtons() {
        return [
            <Button
                value="Cancel"
                clickEvent={ this.props.closeAction } />,
            <Button
                value="Submit"
                clickEvent={ this.props.submitAction } />
        ];
    }

    render() {
        let actions = this._actionButtons();

        return (
            <Dialog
                autoScrollBodyContent
                title={ this.props.title }
                actions={ actions }
                open={ this.props.open }
                onRequestClose={ this.props.closeAction }>
                { this.props.children }
            </Dialog>
        );
    }
}



DialogOverlay.propTypes = {
    children: React.PropTypes.object.isRequired,
    submitAction: React.PropTypes.func.isRequired,
    closeAction: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired
}
