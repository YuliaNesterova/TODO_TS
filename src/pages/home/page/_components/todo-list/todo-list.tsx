import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { ConnectedTodoItem } from '@/pages/home/page/_components/todo-item/todo-item';
import styles from './todo-list.module.scss';

const cn = classNames.bind(styles);
const BLOCK_NAME = 'Todo-list';

interface ITodoInterface {
  id: string;
  name: string;
  checked: boolean;
}

type PropsType = {
  allTodos: Array<ITodoInterface>;
};

export const TodoList = memo(({ allTodos }: PropsType) => {
  return (
    <section className={cn(BLOCK_NAME)}>
      <ul className={cn(`${BLOCK_NAME}__todos`)}>
        {allTodos.map(todo => {
          return (
            <ConnectedTodoItem
              key={todo.id}
              checked={todo.checked}
              id={todo.id}
              name={todo.name}
            />
          );
        })}
      </ul>
    </section>
  );
});

const mapStateToProps = state => ({
  allTodos: state.todosReducer,
});

export const ConnectedList = connect(mapStateToProps)(TodoList);
