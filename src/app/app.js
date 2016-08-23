import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './comment/Main'; // Our custom react component
// import AppBarExampleIcon from './appBar'; // Our custom react component

// import CommentBox from './comment/CommentBox';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Main url="/v1/fenxis?url=itnote.cn"/>, document.getElementById('app'));
// render(<Main url="/commonts.json"/>, document.getElementById('app'));

// var HelloMessage = React.createClass({
//   render: function() {
//     return <div>Hello {this.props.name}</div>;
//   }
// });

// render(<HelloMessage name="John" />, document.getElementById('app'));
// render(<AppBarExampleIcon />, document.getElementById('nav'));

// class Main extends React.Component{
// 	render(){
// 		 return(
// 			<div>
// 			Hello
// 			</div>
// 		 )
// 	}
// }

// var section  = document.createElement('section');
// document.body.appendChild(section);
// render(<CommentBox />,section)
