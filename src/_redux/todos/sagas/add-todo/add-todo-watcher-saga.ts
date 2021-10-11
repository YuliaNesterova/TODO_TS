import { takeEvery } from 'redux-saga/effects';
import { addTodoAsyncActionName } from '../../constants';
import { addTodoWorkerSaga } from './add-todo-worker-saga';

export function* addTodoWatcherSaga() {
  yield takeEvery(addTodoAsyncActionName, addTodoWorkerSaga);
}
