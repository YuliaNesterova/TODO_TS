import React, { memo } from 'react';
import { Form } from '../form/form';
import { TodoList } from '../todo-list/todo-list';

type propsType = {
    onAddTodo: (todo: string) => void;
    onDeleteTodo: (id: string) => void;
    onMarkTodo: (id: string) => void;
    onUnmarkTodo: (id: string) => void;
    todos: Array<any>;
};

export const Main = memo(({ onAddTodo, onDeleteTodo, onMarkTodo, onUnmarkTodo, todos }: propsType) => {
    return (
        <section className="main">
            <Form onAddTodo={onAddTodo}/>
            <TodoList onDeleteTodo={onDeleteTodo} onMarkTodo={onMarkTodo} onUnmarkTodo={onUnmarkTodo}
                  todos={todos} />
        </section>
    )
})