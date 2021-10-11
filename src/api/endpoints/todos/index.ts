const BASE_URL = '/todos';

export const mainTodosEndpoint = BASE_URL;

export const makeDeleteTodoEndpoint = (id: string) => `${BASE_URL}/${id}`;

export const makeMarkTodoEndpoint = (id: string) => `${BASE_URL}/${id}/status`;
