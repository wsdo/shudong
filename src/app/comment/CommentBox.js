/*
* @Author: wshudong
* @Date:   2016-05-08 17:10:58
* @Last Modified by:   wangshudong
* @Last Modified time: 2016-08-20 11:09:27
*/

'use strict';
import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from './AppBar';
// import Main from './Main'; // Our custom react component
// import AutoComplete from './AutoComplete'; // Our custom react component
import Dialog from './Dialog'; // Our custom react component
import AutoComplete from './AutoComplete';

// <Main />
// <AppBar />
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
class CommentBox extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>

				<div className="comment">
				<AutoComplete />
				<Dialog />
				<h1> 评论 </h1>
				</div>
			</MuiThemeProvider>
		);
	}
}

export { CommentBox as default };
