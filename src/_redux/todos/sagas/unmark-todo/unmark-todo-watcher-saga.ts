import { takeEvery } from 'redux-saga/effects';
import { unmarkTodoAsyncActionName } from '../../constants';
import { unmarkTodoWorkerSaga } from './unmark-todo-worker-saga';

export function* unmarkTodoWatcherSaga() {
  yield takeEvery(unmarkTodoAsyncActionName, unmarkTodoWorkerSaga);
}
