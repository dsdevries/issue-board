import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class CommentTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      body: this.props.text || ''
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newComment) {
        this.setState({body: ''});
      }
    }
  }

  handleChange(e) {
    this.setState({body: e.target.value});
  }

  handleBlur(e) {
    if (!this.props.newComment) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input
        className={
          classnames({
            edit: this.props.editing,
            'new-comment': this.props.newTodo
          })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.body}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        />
    );
  }
}

CommentTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  body: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newComment: PropTypes.bool
};

export default CommentTextInput;
