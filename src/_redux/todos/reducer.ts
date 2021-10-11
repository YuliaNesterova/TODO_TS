import { fetchTodosSuccessActionName } from './constants';
import { ActionsType, TodoState } from './types';

const initialState: TodoState = [];

const todosReducer = (
  state: TodoState = initialState,
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
