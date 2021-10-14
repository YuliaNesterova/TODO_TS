import { call, put } from 'redux-saga/effects';
import { deleteTodoRequest } from '@/api/requests/todos';
import { ActionsType } from '../../types';
import { fetchTodosSuccess } from '../../actions';

export function* deleteTodoWorkerSaga(action: ActionsType) {
  const { data, errorText } = yield call(deleteTodoRequest, action.payload);

  try {
    yield put(fetchTodosSuccess(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
