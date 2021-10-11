import { takeEvery } from 'redux-saga/effects';
import { deleteTodoAsyncActionName } from '../../constants';
import { deleteTodoWorkerSaga } from './delete-todo-worker-saga';

export function* deleteTodoWatcherSaga() {
  yield takeEvery(deleteTodoAsyncActionName, deleteTodoWorkerSaga);
}
