import { call, put } from 'redux-saga/effects';
import { unmarkTodoRequest } from '@/api/requests/todos';
import { setTodosSuccessAction } from '../../actions';

export function* unmarkTodoWorkerSaga(payload: string) {
  try {
    const { data, errorText, error } = yield call(unmarkTodoRequest, payload);

    if (error) {
      throw new Error(errorText);
    }

    yield put(setTodosSuccessAction(data.todos));
  } catch (error) {
    console.error('error in unmarkTodoWorkerSaga', error);
  }
}
