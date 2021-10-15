import { takeEvery } from 'redux-saga/effects';
import { MARK_TODO } from '../../actions';
import { markTodoWorkerSaga } from './mark-todo-worker-saga';

export function* markTodoWatcherSaga() {
  yield takeEvery(MARK_TODO, markTodoWorkerSaga);
}
