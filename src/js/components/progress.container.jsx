import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { uncompleteToDo } from '../actions';
import Page from './layout/page.presenter';

class ProgressContainer extends Component {
  render() {
    return (
      <Page
        title="Progress"
      >

      </Page>
    );
  }
}

const mapStateToProps = ({ toDoStore }) => {
  return { toDoStore }
}

export default withRouter(connect(mapStateToProps, { uncompleteToDo })(ProgressContainer));