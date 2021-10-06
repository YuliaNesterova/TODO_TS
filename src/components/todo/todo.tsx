import React, { memo, useCallback } from 'react';
import { TodoItem } from "../todo-item/todo-item";

type propsType = {
    id: string;
    name: string;
    checked: boolean;
    onMarkTodo: (id: string) => void;
    onUnmarkTodo: (id: string) => void;
    onDeleteTodo: (id: string) => void;
}

export const Todo = memo(({ checked, id, name, onMarkTodo, onUnmarkTodo, onDeleteTodo }: propsType) => {
    const checkboxClickFunction = useCallback(() => {
        checked ? onUnmarkTodo(id) : onMarkTodo(id)
    }, [onMarkTodo, onUnmarkTodo, id, checked]);

    const handleDeleteTodo = useCallback(() => {
        onDeleteTodo(id)
    }, [onDeleteTodo, id]);

    return (
       <TodoItem name={name} id={id} checked={checked} onCheckBoxClick={checkboxClickFunction} onDeleteTodo={handleDeleteTodo}/>
    )
});