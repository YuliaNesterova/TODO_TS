import { take, fork } from 'redux-saga/effects';
import { MARK_TODO } from '../../actions';
import { markTodoWorkerSaga } from './mark-todo-worker-saga';

export const MARK_TODO_SAGA_NAME = 'MARK_TODO_SAGA_NAME';

export function* markTodoWatcherSaga() {
  while (true) {
    const { payload } = yield take(MARK_TODO);
    yield fork(markTodoWorkerSaga, payload);
  }
}
