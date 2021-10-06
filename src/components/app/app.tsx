import React, { useEffect, memo } from 'react';
import { useDispatch,
         useSelector } from 'react-redux';
import styles from './app.module.scss';
import classnames from 'classnames/bind';
import { fetchTodosStart,
         addTodoAsync,
         deleteTodoAsync,
         markTodoAsync,
         unmarkTodoAsync } from '../../redux/todos/actions';
import { Header } from '../header/header';
import { Main } from '../main/main';
import { RootState } from '../../redux/root-reducer';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Page';

export const App = memo(() => {
    const dispatch = useDispatch();
    const allTodos = useSelector((state: RootState) => state.todos);

    function handleAddTodo(todo: string) {
        dispatch(addTodoAsync(todo));
    }

    function handleDeleteTodo(id: string) {
        dispatch(deleteTodoAsync(id))
    }

    function handleMarkTodo(id: string) {
        dispatch(markTodoAsync(id));
    }

    function handleUnmarkTodo(id: string) {
        dispatch(unmarkTodoAsync(id));
    }

    useEffect(() => {
        dispatch(fetchTodosStart)
    }, [dispatch]);
   
  return (
    <div className={cn(`${BLOCK_NAME}`)}>
      <Header />
      <Main onAddTodo={handleAddTodo} onDeleteTodo={handleDeleteTodo} onMarkTodo={handleMarkTodo} onUnmarkTodo={handleUnmarkTodo}
            todos={allTodos} />
    </div>
  );
})
