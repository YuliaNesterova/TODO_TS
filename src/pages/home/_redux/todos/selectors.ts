import { createSelector } from 'reselect';
import { TODOS_REDUCER_NAME } from './constants';
import { TodoListType } from './_types';
import { todosInitialState } from './reducer';

const getTodosSelector = state =>
  state[TODOS_REDUCER_NAME] || todosInitialState;

export const TodosDataSelector = createSelector(
  [getTodosSelector],
  (todos: TodoListType) => todos,
);
