import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ConnectedForm } from '@/pages/home/page/_components/connected-form';
import { ConnectedTodoComponent } from '@/pages/home/page/_components/connected-todo-component';
import { Header } from '../header';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Todo-list';

export const TodoList = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Header />
      <ConnectedForm />
      <ConnectedTodoComponent />
    </div>
  );
});
