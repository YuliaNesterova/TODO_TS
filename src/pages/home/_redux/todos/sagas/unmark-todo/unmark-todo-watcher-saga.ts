import { take, fork } from 'redux-saga/effects';
import { UNMARK_TODO } from '../../actions';
import { unmarkTodoWorkerSaga } from './unmark-todo-worker-saga';

export const UNMARK_TODO_SAGA_NAME = 'UNMARK_TODO_SAGA_NAME';

export function* unmarkTodoWatcherSaga() {
  while (true) {
    const { payload } = yield take(UNMARK_TODO);
    yield fork(unmarkTodoWorkerSaga, payload);
  }
}
