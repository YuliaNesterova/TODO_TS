import { call, put } from 'redux-saga/effects';
import { unmarkTodoRequest } from '@/api/requests/todos';
import { fetchTodosSuccessAction, unmarkTodoAction } from '../../actions';

type ActionsType = ReturnType<typeof unmarkTodoAction>;

export function* unmarkTodoWorkerSaga(action: ActionsType) {
  const { data, errorText } = yield call(unmarkTodoRequest, action.payload);

  try {
    yield put(fetchTodosSuccessAction(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
