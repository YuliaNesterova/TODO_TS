import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import todosReducer, {
  deleteTodoWatcherSaga,
  fetchTodosSuccess,
  markTodoWatcherSaga,
  unmarkTodoWatcherSaga,
} from '@/_redux/todos';
import { getAllTodosRequest } from '@/api/requests/todos';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: 'todosReducer',
      reducer: todosReducer,
    },
  ],
  sagasToInject: [
    {
      name: 'deleteTodoSaga',
      saga: deleteTodoWatcherSaga,
    },
    {
      name: 'markTodoSaga',
      saga: markTodoWatcherSaga,
    },
    {
      name: 'unmarkTodoSaga',
      saga: unmarkTodoWatcherSaga,
    },
  ],
  initialLoadManagerConfig: {
    requestConfigList: [
      {
        request: getAllTodosRequest,
        actionSuccess: fetchTodosSuccess,
        responseDataFormatter: ({ todos }) => todos,
      },
    ],
  },
};
