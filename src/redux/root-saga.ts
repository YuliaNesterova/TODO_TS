import { spawn } from 'redux-saga/effects';
import { fetchTodosSaga,
         addTodoSaga,
         deleteTodoSaga,
         checkTodoSaga,
         uncheckTodoSaga } from './todos/sagas';

function* rootSaga() {
    yield spawn(fetchTodosSaga)
    yield spawn(addTodoSaga)
    yield spawn(deleteTodoSaga)
    yield spawn(checkTodoSaga)
    yield spawn(uncheckTodoSaga)
}

export default rootSaga;