import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { 
  createTodoReq as createTodo, 
  updateTodoReq as updateTodo
} from '../../actions/todo.actions'
import Page from '../layout/page.presenter';
import ToDoInput from './todoInput.presenter';
import ToDoList from './todoList.presenter';

class ToDoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoStateChange = this.handleTodoStateChange.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state.inputText);
    this.setState({ inputText: '' })
  }

  handleTodoStateChange(id, isChecked) {
    this.props.updateTodo(id, isChecked);
  }

  renderLoading() {
    const { showLoading, loadingMessage } = this.props;
    if(showLoading){
      return (
        <div>{loadingMessage}</div>
      )
    }
  }

  render() {
    return (
      <Page
        title="Todo"
      >
        <ToDoInput
          buttonText="Add Todo"
          inputText={this.state.inputText}
          handleChange={text => this.setState({ inputText: text })}
          handleSubmit={this.handleSubmit}
        />
        <ToDoList
          todos={this.props.incompleteTodos}
          handleChange={this.handleTodoStateChange}
        />
        {this.renderLoading()}
      </Page>
    );
  }
}

const mapStateToProps = ({ todoStore }) => {
  const incompleteTodos = todoStore.todos.filter(td => !td.isComplete)
  const { showLoading, loadingMessage } = todoStore;
  return { incompleteTodos, showLoading, loadingMessage }
}

export default withRouter(connect(mapStateToProps, { createTodo, updateTodo })(ToDoContainer));