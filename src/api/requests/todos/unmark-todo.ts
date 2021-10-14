import { PureRestRequest } from '@mihanizm56/fetch-api';
import { responseSchema } from '@/api/requests/todos/response-schema';
import { makeMarkTodoEndpoint } from '@/api/endpoints/todos';

export const unmarkTodoRequest = (id: string) => {
  return new PureRestRequest().deleteRequest({
    endpoint: makeMarkTodoEndpoint(id),
    responseSchema,
  });
};
