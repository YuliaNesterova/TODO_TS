import { setTodosSuccessAction } from './actions';
import { TodoStorageType } from './_types';

type ActionsType = ReturnType<typeof setTodosSuccessAction>;

export const todosInitialState: TodoStorageType = {
  isLoading: false,
  data: {
    todos: [],
  },
};

const todosReducer = (
  state = todosInitialState,
  action: ActionsType,
): TodoStorageType => {
  switch (action.type) {
    case setTodosSuccessAction.type:
      return {
        ...state,
        data: {
          ...state.data,
          todos: [...action.payload],
        },
      };
    default:
      return state;
  }
};

export default todosReducer;
