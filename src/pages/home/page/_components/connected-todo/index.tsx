import React, { memo } from 'react';
import { ConnectedForm } from '@/pages/home/page/_components/connected-form';
import { ConnectedTodoComponent } from '@/pages/home/page/_components/connected-todo-component';
import { Header } from '../header';

export const Todo = memo(() => {
  return (
    <>
      <Header />
      <ConnectedForm />
      <ConnectedTodoComponent />
    </>
  );
});
