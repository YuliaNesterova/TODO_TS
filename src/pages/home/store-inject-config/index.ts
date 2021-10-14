import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import { getAllTodos } from '@/api/requests/todos';
import todosReducer, {
  deleteTodoWatcherSaga,
  markTodoWatcherSaga,
  unmarkTodoWatcherSaga,
  fetchTodosSuccess,
} from '../../../_redux/todos';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      reducer: todosReducer,
      name: 'todosReducer',
    },
  ],
  sagasToInject: [
    {
      name: 'deleteTodoSaga',
      saga: deleteTodoWatcherSaga,
    },
    {
      name: 'checkTodoSaga',
      saga: markTodoWatcherSaga,
    },
    {
      name: 'uncheckTodoSaga',
      saga: unmarkTodoWatcherSaga,
    },
  ],
  initialLoadManagerConfig: {
    requestConfigList: [
      {
        request: getAllTodos,
        actionSuccess: fetchTodosSuccess,
        responseDataFormatter: ({ todos }) => todos,
      },
    ],
  },
};
