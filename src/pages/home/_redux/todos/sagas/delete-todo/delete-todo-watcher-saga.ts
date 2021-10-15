import { takeEvery } from 'redux-saga/effects';
import { DELETE_TODO } from '../../actions';
import { deleteTodoWorkerSaga } from './delete-todo-worker-saga';

export function* deleteTodoWatcherSaga() {
  yield takeEvery(DELETE_TODO, deleteTodoWorkerSaga);
}
