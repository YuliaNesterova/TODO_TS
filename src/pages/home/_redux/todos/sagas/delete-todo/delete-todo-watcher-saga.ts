import { take, fork } from 'redux-saga/effects';
import { DELETE_TODO } from '../../actions';
import { deleteTodoWorkerSaga } from './delete-todo-worker-saga';

export const DELETE_TODO_SAGA_NAME = 'DELETE_TODO_SAGA_NAME';

export function* deleteTodoWatcherSaga() {
  while (true) {
    const { payload } = yield take(DELETE_TODO);
    yield fork(deleteTodoWorkerSaga, payload);
  }
}
