import { createSelector } from 'reselect';
import { TODOS_REDUCER_NAME } from './constants';
import { TodoStorageType, TodoStoragePartType } from './_types';
import { todosInitialState } from './reducer';

const getTodosSelector = (store: TodoStoragePartType): TodoStorageType =>
  store[TODOS_REDUCER_NAME] || todosInitialState;

export const TodosDataSelector = createSelector(
  [getTodosSelector],
  (store: TodoStorageType) => store.data.todos,
);
