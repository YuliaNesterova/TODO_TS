import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';

export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const fetchTodosStartAction: IReduxBaseAction<
  typeof FETCH_TODOS_START
> = () => ({
  type: FETCH_TODOS_START,
});
fetchTodosStartAction.type = FETCH_TODOS_START;

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const fetchTodosSuccessAction: IReduxAction<
  string,
  typeof FETCH_TODOS_SUCCESS
> = payload => ({
  type: FETCH_TODOS_SUCCESS,
  payload,
});
fetchTodosSuccessAction.type = FETCH_TODOS_SUCCESS;

export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';
export const fetchTodosErrorAction: IReduxAction<
  string,
  typeof FETCH_TODOS_ERROR
> = payload => ({
  type: FETCH_TODOS_ERROR,
  payload,
});
fetchTodosErrorAction.type = FETCH_TODOS_ERROR;

export const ADD_TODO = 'ADD_TODO';
export const addTodoAction: IReduxAction<
  string,
  typeof ADD_TODO
> = payload => ({
  type: ADD_TODO,
  payload,
});
addTodoAction.type = ADD_TODO;

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodoAction: IReduxAction<
  string,
  typeof DELETE_TODO
> = payload => ({
  type: DELETE_TODO,
  payload,
});
deleteTodoAction.type = DELETE_TODO;

export const MARK_TODO = 'MARK_TODO';
export const markTodoAction: IReduxAction<
  string,
  typeof MARK_TODO
> = payload => ({
  type: MARK_TODO,
  payload,
});
markTodoAction.type = MARK_TODO;

export const UNMARK_TODO = 'UNMARK_TODO';
export const unmarkTodoAction: IReduxAction<
  string,
  typeof UNMARK_TODO
> = payload => ({
  type: UNMARK_TODO,
  payload,
});
unmarkTodoAction.type = UNMARK_TODO;
