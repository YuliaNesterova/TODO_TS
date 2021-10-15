import { TODOS_REDUCER_NAME } from '@/pages/home/_redux/todos/constants';

export type TodoStorageType = {
  isLoading: boolean;
  data: TodoStorageDataType;
};

export type TodoStorageDataType = {
  todos: Array<string>;
};

export type TodoStoragePartType = {
  [TODOS_REDUCER_NAME]: TodoStorageType;
};
