import { takeEvery } from 'redux-saga/effects';
import { DELETE_TODO } from '../../actions';
import { deleteTodoWorkerSaga } from './delete-todo-worker-saga';

export const DELETE_TODO_SAGA_NAME = 'DELETE_TODO_SAGA_NAME';

export function* deleteTodoWatcherSaga() {
  yield takeEvery(DELETE_TODO, deleteTodoWorkerSaga);
}
