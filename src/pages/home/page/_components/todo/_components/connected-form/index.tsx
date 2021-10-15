import React, { Component, FC } from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import { FormApi } from 'final-form';
import { setTodosSuccessAction } from '@/pages/home/_redux/todos';
import { postNewTodoRequest } from '@/api/requests/todos';
import { FormView } from './_components/form-view';

type PropsType = {
  submitTodoForm: typeof fetchFormManagerSagaAction;
};

class WrappedContainer extends Component<PropsType> {
  handleAddTodo = ({ todo }: { todo: string }, form: FormApi) => {
    this.props.submitTodoForm({
      formValues: todo,
      formRequest: () => postNewTodoRequest(todo),
      formSuccessAction: setTodosSuccessAction,
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

export const ConnectedForm: FC = connect(
  null,
  mapDispatchToProps,
)(WrappedContainer);
