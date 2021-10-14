import React, { memo } from 'react';
import { ConnectedForm } from '@/pages/home/page/_components/connected-todo/_components/connected-form';
import { ConnectedTodoComponent } from '@/pages/home/page/_components/connected-todo/_components/connected-todo-component';
import { Header } from './_components/header';

export const Todo = memo(() => {
  return (
    <div>
      <Header />
      <ConnectedForm />
      <ConnectedTodoComponent />
    </div>
  );
});
