import { call, put } from 'redux-saga/effects';
import { unmarkTodoRequest } from '@/api/requests/todos';
import { setTodosSuccessAction, unmarkTodoAction } from '../../actions';

type ActionsType = ReturnType<typeof unmarkTodoAction>;

export function* unmarkTodoWorkerSaga(action: ActionsType) {
  try {
    const { data, errorText, error } = yield call(
      unmarkTodoRequest,
      action.payload,
    );

    if (error) {
      throw new Error(errorText);
    }

    yield put(setTodosSuccessAction(data.todos));
  } catch (error) {
    console.error('error in unmarkTodoWorkerSaga', error);
  }
}
