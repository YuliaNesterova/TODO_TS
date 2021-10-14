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
  constructor(props) {
    super(props);
    this.state = { todoInputValue: '', errorText: '', disabled: false };
  }

  handleTodoInputChange = (event: string) => {
    if (event.match(/[^a-zA-Zа-яА-ЯёË\s-]/gi)) {
      this.setState({ errorText: 'Можно ввести только буквы', disabled: true });
    } else if (event.length < 10) {
      this.setState({ errorText: 'Минимум 10 символов', disabled: true });
    } else if (event.length > 20) {
      this.setState({ errorText: 'Максимум 20 символов', disabled: true });
    } else {
      this.setState({ errorText: '', disabled: false });
    }

    this.setState({ todoInputValue: event });
  };

  handleTodoInputBlur = () => {
    this.setState({ errorText: '' });
  };

  handleTodoInputFocus = () => {
    if (this.state.todoInputValue.length === 0) {
      this.setState({ errorText: 'Заполните поле', disabled: true });
    }
  };

  handleAddTodo = () => {
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
    return (
      <FormElement
        disabled={this.state.disabled}
        errorText={this.state.errorText}
        onAddTodo={this.handleAddTodo}
        onBlur={this.handleTodoInputBlur}
        onChange={this.handleTodoInputChange}
        onFocus={this.handleTodoInputFocus}
        value={this.state.todoInputValue}
      />
    );
  }
}

const mapDispatchToProps = {
  submitForm: fetchFormManagerSagaAction,
};

export const ConnectedForm = connect(
  null,
  mapDispatchToProps,
)(WrappedContainer);
