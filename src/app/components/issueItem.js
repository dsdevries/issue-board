import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import CommentTextInput from './CommentTextInput';

class IssueItem extends Component {
  
    constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }
  
    handleSave(text) {
    if (text.length !== 0) {
      console.log(text);
      this.props.actions.addTodo(text);
    }
  }
  
  render() {
    const {issue, comments} = this.props;
    return (
      <section className="main">
        <Link to="/">Back</Link>
        <h1>{issue.title}</h1>

        <ul className="comments-list">
          {comments.items.map(comment =>
            <li key={comment.id}>{comment.body}</li>
          )}
        </ul>
        
                <CommentTextInput
          newComment
          onSave={this.handleSave}
          placeholder="What needs to be done?"
          />

      </section>
    );
  }
}

IssueItem.propTypes = {
  issue: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired
};

export default IssueItem;
