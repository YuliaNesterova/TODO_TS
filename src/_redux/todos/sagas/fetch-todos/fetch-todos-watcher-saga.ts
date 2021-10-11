import { takeEvery } from 'redux-saga/effects';
import { fetchTodosStartActionName } from '../../constants';
import { fetchTodosWorkerSaga } from './fetch-todos-worker-saga';

export function* fetchTodosWatcherSaga() {
  yield takeEvery(fetchTodosStartActionName, fetchTodosWorkerSaga);
}
