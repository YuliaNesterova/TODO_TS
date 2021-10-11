import React, { Component } from 'react';
import { BasicTrashIcon, ButtonLink, Checkbox } from '@wildberries/ui-kit';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  deleteTodoAsync,
  markTodoAsync,
  unmarkTodoAsync,
} from '@/_redux/todos';
import styles from './todo-item.module.scss';

const cn = classNames.bind(styles);
const BLOCK_NAME = 'Todo';

type PropsType = {
  id: string;
  name: string;
  checked: boolean;
  markTodo: (id: string) => void;
  unmarkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

class TodoItem extends Component<PropsType> {
  checkboxClickFunction = () => {
    const { checked, unmarkTodo, markTodo, id } = this.props;

    return checked ? unmarkTodo(id) : markTodo(id);
  };

  handleDeleteTodo = () => {
    const { deleteTodo, id } = this.props;
    deleteTodo(id);
  };

  render() {
    const { id, checked, name } = this.props;

    return (
      <li className={cn(BLOCK_NAME)}>
        <p
          className={cn(
            {
              [`${cn(`${BLOCK_NAME}__text`)} ${cn(
                `${BLOCK_NAME}__text_checked`,
              )}`]: checked,
            },
            { [`${cn(`${BLOCK_NAME}__text`)}`]: !checked },
          )}
        >
          {name}
        </p>
        <div className={cn(`${BLOCK_NAME}__buttons`)}>
          <Checkbox
            checked={checked}
            id={`${id}-checkbox`}
            name="todo"
            onClick={this.checkboxClickFunction}
          />
          <ButtonLink
            onClick={this.handleDeleteTodo}
            rightIcon={BasicTrashIcon}
            size="small"
          />
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  markTodo: (id: string) => dispatch(markTodoAsync(id)),
  unmarkTodo: (id: string) => dispatch(unmarkTodoAsync(id)),
  deleteTodo: (id: string) => dispatch(deleteTodoAsync(id)),
});

export const ConnectedTodoItem = connect(
  null,
  mapDispatchToProps,
)(TodoItem);
