import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { 
  createTodoReq as createTodo, 
  completeTodoReq as completeTodo 
} from '../../actions/todo.actions'
import Page from '../layout/page.presenter';
import ToDoInput from './todoInput.presenter';

class ToDoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createToDo(this.state.inputText);
    this.setState({ inputText: '' })
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
      </Page>
    );
  }
}

const mapStateToProps = ({ todoStore }) => {
  return { todoStore }
}

export default withRouter(connect(mapStateToProps, { createTodo, completeTodo })(ToDoContainer));