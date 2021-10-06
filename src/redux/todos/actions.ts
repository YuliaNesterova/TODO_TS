import { SimpleAction, Action } from './types';

export const fetchTodosStart: SimpleAction = { type: 'FETCH_TODOS_START' };
export const fetchTodosSuccess: Action = (todo: string) => ({ type: 'FETCH_TODOS_SUCCESS', payload: todo });
export const fetchTodosError: Action = (error: string) => ({ type: 'FETCH_TODOS_ERROR', payload: error });
export const addTodoAsync: Action = (name: string) => ({ type: 'ADD_TODO_ASYNC', payload: name });
export const deleteTodoAsync: Action = (id: string) => ({ type: 'DELETE_TODO_ASYNC', payload: id });
export const markTodoAsync: Action = (id: string) => ({ type: 'MARK_TODO_ASYNC', payload: id });
export const unmarkTodoAsync: Action = (id: string) => ({ type: 'UNMARK_TODO_ASYNC', payload: id });