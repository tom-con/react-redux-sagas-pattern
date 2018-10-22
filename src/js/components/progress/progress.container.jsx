import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {  
  updateTodoReq as updateTodo
} from '../../actions/todo.actions'
import Page from '../layout/page.presenter';
import ToDoList from '../todo/todoList.presenter';

class ProgressContainer extends Component {

  constructor(props){
    super(props);

    this.handleTodoStateChange = this.handleTodoStateChange.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  handleTodoStateChange(id, isChecked) {
    this.props.updateTodo(id, isChecked);
  }

  renderLoading() {
    const { showLoading, loadingMessage } = this.props;
    if(showLoading) {
      return (
        <div>{loadingMessage}</div>
      )
    }
  }

  render() {
    return (
      <Page
        title="Progress"
      >
        <ToDoList
          todos={this.props.completeTodos}
          handleChange={this.handleTodoStateChange}
        />
        {this.renderLoading()}
      </Page>
    );
  }
}

const mapStateToProps = ({ todoStore }) => {
  const completeTodos = todoStore.todos.filter(td => td.isComplete)
  const { showLoading, loadingMessage } = todoStore;
  return { completeTodos, showLoading, loadingMessage }
}

export default withRouter(connect(mapStateToProps, { updateTodo })(ProgressContainer));