import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import { getAllTodosRequest } from '@/api/requests/todos';
import todosReducer, {
  setTodosSuccessAction,
  deleteTodoWatcherSaga,
  markTodoWatcherSaga,
  unmarkTodoWatcherSaga,
  TODOS_REDUCER_NAME,
  DELETE_TODO_SAGA_NAME,
  MARK_TODO_SAGA_NAME,
  UNMARK_TODO_SAGA_NAME,
} from '../_redux/todos';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: TODOS_REDUCER_NAME,
      reducer: todosReducer,
    },
  ],
  sagasToInject: [
    {
      name: DELETE_TODO_SAGA_NAME,
      saga: deleteTodoWatcherSaga,
    },
    {
      name: MARK_TODO_SAGA_NAME,
      saga: markTodoWatcherSaga,
    },
    {
      name: UNMARK_TODO_SAGA_NAME,
      saga: unmarkTodoWatcherSaga,
    },
  ],
  initialLoadManagerConfig: {
    requestConfigList: [
      {
        request: getAllTodosRequest,
        actionSuccess: setTodosSuccessAction,
        responseDataFormatter: ({ todos }) => todos,
      },
    ],
  },
};
