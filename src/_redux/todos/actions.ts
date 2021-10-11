import { BaseAction, AnyAction } from '@mihanizm56/redux-core-modules';
import {
  fetchTodosStartActionName,
  fetchTodosSuccessActionName,
  fetchTodosErrorActionName,
  addTodoAsyncActionName,
  deleteTodoAsyncActionName,
  markTodoAsyncActionName,
  unmarkTodoAsyncActionName,
} from './constants';

export const fetchTodosStart: BaseAction = () => ({
  type: fetchTodosStartActionName,
});
export const fetchTodosSuccess: AnyAction = (todo: string) => ({
  type: fetchTodosSuccessActionName,
  payload: todo,
});
export const fetchTodosError: AnyAction = (error: string) => ({
  type: fetchTodosErrorActionName,
  payload: error,
});
export const addTodoAsync: AnyAction = (name: string) => ({
  type: addTodoAsyncActionName,
  payload: name,
});
export const deleteTodoAsync: AnyAction = (id: string) => ({
  type: deleteTodoAsyncActionName,
  payload: id,
});
export const markTodoAsync: AnyAction = (id: string) => ({
  type: markTodoAsyncActionName,
  payload: id,
});
export const unmarkTodoAsync: AnyAction = (id: string) => ({
  type: unmarkTodoAsyncActionName,
  payload: id,
});
