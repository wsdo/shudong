import React, {Component} from 'react';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
const style = {
  margin: 12,
};

class CommentForm extends Component {
	handleSubmit(event){
		event.preventDefault();
		let author = this.refs.author.value,
			text = this.refs.text.value;

		this.props.onCommentSubmit({author, text, date: '刚刚'});
	}



    constructor(props, context) {
      super(props, context);
      this.handleUpdateInput = this.handleUpdateInput.bind(this)

      this.state = {
        dataSource: [],
      };
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
	render() {
		return (
            <div>
			<form className = "ui reply form" onSubmit={this.handleSubmit.bind(this)}>
				<div className="field">
					<input type="text" placeholder="姓名"  ref="author"/>
				</div>
                <AutoComplete
                  hintText="请输入网址"
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                />
                <div className="field">
                    <textarea placeholder="评论" ref="text"> </textarea>
                </div>
                <RaisedButton type="submit" label="Default" secondary={true} style={style} />
			</form>
            </div>
			);
	}
}

export { CommentForm as default };
