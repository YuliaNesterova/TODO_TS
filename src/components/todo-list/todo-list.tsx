import React, { memo } from 'react';
import { Todo } from '../todo/todo';
import styles from './todo-list.module.scss';
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
const BLOCK_NAME = 'Todo-list';

interface TodoInterface {
    id: string;
    name: string;
    checked: boolean;
}

type propsTypes = {
    onMarkTodo: (id: string) => void;
    onDeleteTodo: (id: string) => void;
    onUnmarkTodo: (id: string) => void;
    todos: Array<TodoInterface>;
}

export const TodoList = memo(({ onMarkTodo, onDeleteTodo, onUnmarkTodo, todos }: propsTypes) => {
    return (
        <section className={cn(`${BLOCK_NAME}`)}>
            <ul className={cn(`${BLOCK_NAME}__todos`)}>
                {todos.map((todo) => {
                    return <Todo name={todo.name} id={todo.id} checked={todo.checked} key={todo.id}
                                 onDeleteTodo={onDeleteTodo} onMarkTodo={onMarkTodo}
                                 onUnmarkTodo={onUnmarkTodo} />
                })}
            </ul>
        </section>
    )
});