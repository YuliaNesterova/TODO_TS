import { call, put } from 'redux-saga/effects';
import { deleteTodoRequest } from '@/api/requests/todos';
import { setTodosSuccessAction } from '../../actions';

export function* deleteTodoWorkerSaga(payload: string) {
  try {
    const { data, errorText, error } = yield call(deleteTodoRequest, payload);

    if (error) {
      throw new Error(errorText);
    }

    yield put(setTodosSuccessAction(data.todos));
  } catch (error) {
    console.error('error in deleteTodoWorkerSaga', error);
  }
}
