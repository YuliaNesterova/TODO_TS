import { takeEvery } from 'redux-saga/effects';
import { UNMARK_TODO } from '../../actions';
import { unmarkTodoWorkerSaga } from './unmark-todo-worker-saga';

export const UNMARK_TODO_SAGA_NAME = 'UNMARK_TODO_SAGA_NAME';

export function* unmarkTodoWatcherSaga() {
  yield takeEvery(UNMARK_TODO, unmarkTodoWorkerSaga);
}
