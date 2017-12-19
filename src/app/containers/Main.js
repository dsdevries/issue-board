import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import IssueList from '../components/IssueList';

class Main extends Component {
  render() {
    const {issues} = this.props;
    return (
      <section className="main">
        <h1>Issues</h1>
        <IssueList
          issues={issues}
          />
      </section>
    );
  }
}

Main.propTypes = {
  issues: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    issues: state.issues
  };
}

export default connect(
        mapStateToProps
        )(Main);
