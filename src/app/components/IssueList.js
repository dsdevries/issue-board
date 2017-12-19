import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';

class IssueList extends Component {
  render() {
    const {issues} = this.props;

    return (
      <ul className="issue-list">
        {issues.items.map(issue =>
          <li key={issue.id}><Link to={`/issue/${issue.id}`}>{issue.title}</Link></li>
        )}
      </ul>
    );
  }
}

IssueList.propTypes = {
  issues: PropTypes.object.isRequired
};

export default IssueList;
