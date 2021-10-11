import { takeEvery } from 'redux-saga/effects';
import { markTodoAsyncActionName } from '../../constants';
import { markTodoWorkerSaga } from './mark-todo-worker-saga';

export function* markTodoWatcherSaga() {
  yield takeEvery(markTodoAsyncActionName, markTodoWorkerSaga);
}
