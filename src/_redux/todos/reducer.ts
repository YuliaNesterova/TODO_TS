import { fetchTodosSuccessActionName } from './constants';
import { ActionsType, TodoState } from './types';

export const todosInitialState: TodoState = [];

const todosReducer = (
  state: TodoState = todosInitialState,
  { type, payload }: ActionsType,
): TodoState => {
  switch (type) {
    case fetchTodosSuccessActionName:
      return [...payload];
    default:
      return state;
  }
};

export default todosReducer;
