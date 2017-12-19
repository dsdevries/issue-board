import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as IssueActions from '../actions/index';
import IssueItem from '../components/IssueItem';

class Detail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      issue: {title: 'initializing'}
    };
  }

  componentWillMount() {
    const issue = getIssue(this.props);
    this.setState({issue});

    if (issue.comments_url) {
      this.props.actions.fetchComments(issue.comments_url);
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextIssue = getIssue(nextProps);

    if (this.state.issue !== nextIssue) {
      this.setState({nextIssue});
      if (nextIssue.comments_url) {
        this.props.actions.fetchComments(nextIssue.comments_url);
      }
    }
  }

  render() {
    const {actions, comments} = this.props;

    return (
      <section className="main">
        <IssueItem
          issue={this.state.issue}
          actions={actions}
          comments={comments}
          />
      </section>
    );
  }
}

Detail.propTypes = {
  actions: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    issues: state.issues,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IssueActions, dispatch)
  };
}

function getIssue(props) {
  const id = props.match.params.item;
  return props.issues.isFetching ? {title: 'loading'} : props.issues.items.find(issue => issue.id == id);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Detail);
