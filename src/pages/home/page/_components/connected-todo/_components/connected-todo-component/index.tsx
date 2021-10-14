import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteTodoAsync,
  markTodoAsync,
  TodosDataSelector,
  unmarkTodoAsync,
} from '@/_redux/todos';
import { TodoList } from './_components/todo-list';
import { TodosType, ParamsType } from './types';

type PropsType = {
  allTodos: Array<TodosType>;
  markTodo: (id: string) => void;
  unmarkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

class WrappedContainer extends Component<PropsType> {
  handleCheckboxClick = ({ id, checked }: ParamsType) => {
    return checked ? this.props.unmarkTodo(id) : this.props.markTodo(id);
  };

  handleDeleteTodo = id => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <TodoList
        allTodos={this.props.allTodos}
        onCheckboxClick={this.handleCheckboxClick}
        onDeleteTodo={this.handleDeleteTodo}
      />
    );
  }
}

const mapStateToProps = state => ({
  allTodos: TodosDataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  markTodo: (id: string) => dispatch(markTodoAsync(id)),
  unmarkTodo: (id: string) => dispatch(unmarkTodoAsync(id)),
  deleteTodo: (id: string) => dispatch(deleteTodoAsync(id)),
});

export const ConnectedTodoComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
