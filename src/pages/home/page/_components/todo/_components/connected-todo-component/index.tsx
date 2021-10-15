import React, { Component, FC } from 'react';
import { connect } from 'react-redux';
import {
  TodoStoragePartType,
  deleteTodoAction,
  markTodoAction,
  unmarkTodoAction,
  TodosDataSelector,
} from '@/pages/home/_redux/todos';
import { TodoList } from './_components/todo-list';
import { TodosType, ParamsType } from './_types';

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

  handleDeleteTodo = (id: string) => {
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

const mapStateToProps = (store: TodoStoragePartType) => ({
  allTodos: TodosDataSelector(store),
});

const mapDispatchToProps = {
  markTodo: markTodoAction,
  unmarkTodo: unmarkTodoAction,
  deleteTodo: deleteTodoAction,
};

export const ConnectedTodoComponent: FC = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
