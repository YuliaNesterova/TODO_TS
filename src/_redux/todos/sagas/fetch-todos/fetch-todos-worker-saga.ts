import { call, put } from 'redux-saga/effects';
import { getAllTodos } from '@/api/requests/todos';
import { fetchTodosSuccess } from '../../actions';

export function* fetchTodosWorkerSaga() {
  const { data, errorText } = yield call(getAllTodos);

  try {
    yield put(fetchTodosSuccess(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
