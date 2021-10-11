import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAsync } from '@/_redux/todos';
import { FormElement } from '../form-element/form-element';

type PropsType = {
  addTodo: (values: string) => void;
};

interface IValues {
  todo: string;
}

class TodoForm extends Component<PropsType> {
  handleAddItem = (values: IValues, form: HTMLFormElement) => {
    const { addTodo } = this.props;
    addTodo(values.todo);
    setTimeout(form.reset);
  };

  render() {
    return <FormElement onHandleAddTodo={this.handleAddItem} />;
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (todo: string) => dispatch(addTodoAsync(todo)),
});

export const ConnectedTodoForm = connect(
  null,
  mapDispatchToProps,
)(TodoForm);
