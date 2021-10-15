import React, { memo } from 'react';
import { ConnectedForm } from '@/pages/home/page/_components/todo/_components/connected-form';
import { ConnectedTodoComponent } from '@/pages/home/page/_components/todo/_components/connected-todo-component';
import { Header } from './_components/header';

const BLOCK_NAME = 'Todo';

export const Todo = memo(() => {
  return (
    <div className={BLOCK_NAME}>
      <Header />
      <ConnectedForm />
      <ConnectedTodoComponent />
    </div>
  );
});
