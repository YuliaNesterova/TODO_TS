import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { TodosType, ParamsType } from '../../types';
import { TodoItem } from './_components/todo-item';
import styles from './index.module.scss';

const cn = classNames.bind(styles);
const BLOCK_NAME = 'Todo-list';

type PropsType = {
  allTodos: Array<TodosType>;
  onCheckboxClick: ({ id, checked }: ParamsType) => void;
  onDeleteTodo: (id: string) => void;
};

export const TodoList = memo(
  ({ allTodos, onCheckboxClick, onDeleteTodo }: PropsType) => {
    return (
      <section className={cn(BLOCK_NAME)}>
        <ul className={cn(`${BLOCK_NAME}__todos`)}>
          {allTodos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                checked={todo.checked}
                id={todo.id}
                name={todo.name}
                onCheckboxClick={onCheckboxClick}
                onDeleteTodo={onDeleteTodo}
              />
            );
          })}
        </ul>
      </section>
    );
  },
);
