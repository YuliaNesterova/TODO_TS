import { call, put } from 'redux-saga/effects';
import { markTodoRequest } from '@/api/requests/todos';
import { setTodosSuccessAction, markTodoAction } from '../../actions';

type ActionsType = ReturnType<typeof markTodoAction>;

export function* markTodoWorkerSaga(action: ActionsType) {
  try {
    const { data, errorText, error } = yield call(
      markTodoRequest,
      action.payload,
    );

    if (error) {
      throw new Error(errorText);
    }

    yield put(setTodosSuccessAction(data.todos));
  } catch (error) {
    console.error('error in markTodoWorkerSaga', error);
  }
}
