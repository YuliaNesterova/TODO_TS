import { call, put } from 'redux-saga/effects';
import { markTodoRequest } from '@/api/requests/todos';
import { fetchTodosSuccessAction, markTodoAction } from '../../actions';

type ActionsType = ReturnType<typeof markTodoAction>;

export function* markTodoWorkerSaga(action: ActionsType) {
  const { data, errorText } = yield call(markTodoRequest, action.payload);

  try {
    yield put(fetchTodosSuccessAction(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
