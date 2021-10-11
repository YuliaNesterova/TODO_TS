import { call, put } from 'redux-saga/effects';
import { unmarkTodo } from '@/api/requests/todos';
import { ActionsType } from '../../types';
import { fetchTodosSuccess } from '../../actions';

export function* unmarkTodoWorkerSaga(action: ActionsType) {
  const { data, errorText } = yield call(unmarkTodo, action.payload);

  try {
    yield put(fetchTodosSuccess(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
