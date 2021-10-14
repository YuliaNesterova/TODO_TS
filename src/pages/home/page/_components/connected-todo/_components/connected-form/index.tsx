import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { FormApi } from 'final-form';
import { fetchTodosSuccess } from '@/_redux/todos';
import { postNewTodoRequest } from '@/api/requests/todos';
import { FormView } from './_components/form-view';

type PropsType = {
  submitTodoForm: typeof fetchFormManagerSagaAction;
};

type StateType = {
  todoInputValue: string;
  errorText: string;
  disabled: boolean;
};

class WrappedContainer extends Component<PropsType, StateType> {
  handleAddTodo = ({ todo }: { todo: string }, form: FormApi) => {
    this.props.submitTodoForm({
      formValues: todo,
      formRequest: () => postNewTodoRequest(todo),
      formSuccessAction: fetchTodosSuccess,
      responseDataFormatter: ({ todos }) => todos,
      callBackOnSuccess: form.reset,
    });
  };

  render() {
    return <FormView onAddTodo={this.handleAddTodo} />;
  }
}

const mapDispatchToProps = {
  submitTodoForm: fetchFormManagerSagaAction,
};

export const ConnectedForm = connect(
  null,
  mapDispatchToProps,
)(WrappedContainer);
