import { call, put } from 'redux-saga/effects';
import { deleteTodoRequest } from '@/api/requests/todos';
import { deleteTodoAction, setTodosSuccessAction } from '../../actions';

type ActionsType = ReturnType<typeof deleteTodoAction>;

export function* deleteTodoWorkerSaga(action: ActionsType) {
  try {
    const { data, errorText, error } = yield call(
      deleteTodoRequest,
      action.payload,
    );

    if (error) {
      throw new Error(errorText);
    }

    yield put(setTodosSuccessAction(data.todos));
  } catch (error) {
    console.error('error in deleteTodoWorkerSaga', error);
  }
}
