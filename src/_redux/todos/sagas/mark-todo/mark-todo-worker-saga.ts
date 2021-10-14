import { call, put } from 'redux-saga/effects';
import { markTodoRequest } from '@/api/requests/todos';
import { ActionsType } from '../../types';
import { fetchTodosSuccess } from '../../actions';

export function* markTodoWorkerSaga(action: ActionsType) {
  const { data, errorText } = yield call(markTodoRequest, action.payload);

  try {
    yield put(fetchTodosSuccess(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
