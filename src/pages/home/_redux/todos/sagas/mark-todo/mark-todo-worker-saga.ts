import { call, put } from 'redux-saga/effects';
import { markTodoRequest } from '@/api/requests/todos';
import { setTodosSuccessAction } from '../../actions';

export function* markTodoWorkerSaga(payload: string) {
  try {
    const { data, errorText, error } = yield call(markTodoRequest, payload);

    if (error) {
      throw new Error(errorText);
    }

    yield put(setTodosSuccessAction(data.todos));
  } catch (error) {
    console.error('error in markTodoWorkerSaga', error);
  }
}
