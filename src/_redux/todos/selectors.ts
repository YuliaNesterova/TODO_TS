import { createSelector } from 'reselect';
import { TodoState } from '@/_redux/todos/types';
import { todosInitialState } from '@/_redux/todos/reducer';

const getTodosSelector = state => state.todosReducer || todosInitialState;

export const TodosDataSelector = createSelector(
  [getTodosSelector],
  (todos: TodoState) => todos,
);
