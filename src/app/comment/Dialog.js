import React, {Component}from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
 const styles = {
   container: {
     textAlign: 'center',
     paddingTop: 200,
   },
 };

 const style = {
   margin: 12,
 };
 const muiTheme = getMuiTheme({
   palette: {
     accent1Color: deepOrange500,
   },
 });

class Dialogs extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }

    handleRequestClose() {
        this.setState({
            open: false,
        })
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
        />,
      ];

      return (

        <div>
          <RaisedButton label="Dialog" onTouchTap={this.handleTouchTap} />
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            The actions in this window were passed in as an array of React objects.
          </Dialog>
        </div>
      );
    }
}

export default Dialogs;
