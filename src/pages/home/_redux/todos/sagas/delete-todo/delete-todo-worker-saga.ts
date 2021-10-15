import { call, put } from 'redux-saga/effects';
import { deleteTodoRequest } from '@/api/requests/todos';
import { deleteTodoAction, fetchTodosSuccessAction } from '../../actions';

type ActionsType = ReturnType<typeof deleteTodoAction>;

export function* deleteTodoWorkerSaga(action: ActionsType) {
  const { data, errorText } = yield call(deleteTodoRequest, action.payload);

  try {
    yield put(fetchTodosSuccessAction(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
