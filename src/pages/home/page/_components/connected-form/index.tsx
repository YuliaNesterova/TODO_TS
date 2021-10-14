import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { postNewTodo } from '@/api/requests/todos';
import { fetchTodosSuccess } from '@/_redux/todos';
import { FormElement } from './_components/form-element';

type PropsType = {
  submitForm: typeof fetchFormManagerSagaAction;
};

type StateType = {
  todoInputValue: string;
  errorText: string;
  disabled: boolean;
};

class WrappedContainer extends Component<PropsType, StateType> {
  handleAddTodo = ({ todo }: { todo: string }) => {
    this.props.submitForm({
      formRequest: postNewTodo,
      formSuccessAction: fetchTodosSuccess,
      responseDataFormatter: ({ todos }) => todos,
      callBackOnSuccess: () => {
        this.setState({ todoInputValue: '' });
      },
      formValues: this.state.todoInputValue,
    });
  };

  render() {
    return <FormElement onAddTodo={this.handleAddTodo} />;
  }
}

const mapDispatchToProps = {
  submitForm: fetchFormManagerSagaAction,
};

export const ConnectedForm = connect(
  null,
  mapDispatchToProps,
)(WrappedContainer);
