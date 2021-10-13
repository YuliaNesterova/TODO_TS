export const mainTodosEndpoint = '/todos';

export const makeDeleteTodoEndpoint = (id: string) =>
  `${mainTodosEndpoint}/${id}`;

export const makeMarkTodoEndpoint = (id: string) =>
  `${mainTodosEndpoint}/${id}/status`;
