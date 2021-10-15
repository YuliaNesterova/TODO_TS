import { FETCH_TODOS_SUCCESS, fetchTodosSuccessAction } from './actions';
import { TodoListType } from './_types';

type ActionsType = ReturnType<typeof fetchTodosSuccessAction>;

export const todosInitialState: TodoListType = [];

const todosReducer = (
  state = todosInitialState,
  action: ActionsType,
): TodoListType => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

export default todosReducer;
