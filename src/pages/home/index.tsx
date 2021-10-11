import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import {
  injectAsyncReducer,
  injectAsyncSaga,
} from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import todosReducer, {
  fetchTodosWatcherSaga,
  addTodoWatcherSaga,
  deleteTodoWatcherSaga,
  markTodoWatcherSaga,
  unmarkTodoWatcherSaga,
} from '../../_redux/todos';
import { Page } from './page';

const pageNode = 'home';

const action = async ({ store }) => {
  injectAsyncReducer({
    store,
    name: 'todosReducer',
    reducer: todosReducer,
  });
  injectAsyncSaga({
    store,
    name: 'fetchTodosSaga',
    saga: fetchTodosWatcherSaga,
  });
  injectAsyncSaga({
    store,
    name: 'addTodoSaga',
    saga: addTodoWatcherSaga,
  });
  injectAsyncSaga({
    store,
    name: 'deleteTodoSaga',
    saga: deleteTodoWatcherSaga,
  });
  injectAsyncSaga({
    store,
    name: 'checkTodoSaga',
    saga: markTodoWatcherSaga,
  });
  injectAsyncSaga({
    store,
    name: 'uncheckTodoSaga',
    saga: unmarkTodoWatcherSaga,
  });

  return {
    title: 'Home',
    content: (
      <AppLayout>
        <RouteNode nodeName={pageNode}>
          {({ route, content }) => {
            if (route.name === pageNode) {
              return <Page />;
            }

            return content;
          }}
        </RouteNode>
      </AppLayout>
    ),
  };
};

export default action;
