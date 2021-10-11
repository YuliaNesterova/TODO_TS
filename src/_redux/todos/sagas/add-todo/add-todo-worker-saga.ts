import { call, put } from 'redux-saga/effects';
import { postNewTodo } from '@/api/requests/todos';
import { ActionsType } from '../../types';
import { fetchTodosSuccess } from '../../actions';

export function* addTodoWorkerSaga(action: ActionsType) {
  const { data, errorText } = yield call(postNewTodo, action.payload);

  try {
    yield put(fetchTodosSuccess(data.todos));
  } catch {
    throw new Error(errorText);
  }
}
