import { PureRestRequest } from '@mihanizm56/fetch-api';
import { responseSchema } from '@/api/requests/todos/response-schema';
import { makeDeleteTodoEndpoint } from '@/api/endpoints/todos';

export const deleteTodoRequest = (id: string) => {
  return new PureRestRequest().deleteRequest({
    endpoint: makeDeleteTodoEndpoint(id),
    responseSchema,
  });
};
