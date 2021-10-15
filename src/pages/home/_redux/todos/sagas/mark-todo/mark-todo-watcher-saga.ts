import { takeEvery } from 'redux-saga/effects';
import { MARK_TODO } from '../../actions';
import { markTodoWorkerSaga } from './mark-todo-worker-saga';

export const MARK_TODO_SAGA_NAME = 'MARK_TODO_SAGA_NAME';

export function* markTodoWatcherSaga() {
  yield takeEvery(MARK_TODO, markTodoWorkerSaga);
}
