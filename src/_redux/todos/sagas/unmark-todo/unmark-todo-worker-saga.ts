import { call, put } from 'redux-saga/effects';
import { unmarkTodoRequest } from '@/api/requests/todos';
import { ActionsType } from '../../types';
import { fetchTodosSuccess } from '../../actions';

export function* unmarkTodoWorkerSaga(action: ActionsType) {
  const { data, errorText } = yield call(unmarkTodoRequest, action.payload);

  try {
    yield put(fetchTodosSuccess(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
