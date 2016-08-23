/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';

import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import CommentForm from './CommentForm';


// import AutoComplete from './AutoComplete';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
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

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.getComments();
    setInterval(() => this.getComments(),5000);


    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this)

    this.state = {
      open: false,
      dataSource: [],
      data:[],
    };
  }

  handleCommentSubmit(comment) {
      let comments = this.state.data,
        //   newComments = comments.concat(comment);
          newComments = comment;
          let hh = 1;
          console.log(hh);
      console.log(comments);

    //   this.setState({data: newComments});
  }

  getComments(){
      $.ajax({
          url:this.props.url,
          type:"get",
          dataType: 'json',
          cache: false,
          success:comments => {
              this.setState({data: comments});
          },
          error: (xhr, status, error) => {
              console.log(error);
          }

      });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleUpdateInput(value){
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
        <AppBar
          title="web分析"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />



        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />

        <MobileTearSheet>
          <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          </List>
          <Divider />
          <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
          </List>
        </MobileTearSheet>


          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onTouchTap={this.handleTouchTap}
          />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
