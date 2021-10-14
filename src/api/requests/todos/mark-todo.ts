import { PureRestRequest } from '@mihanizm56/fetch-api';
import { responseSchema } from '@/api/requests/todos/response-schema';
import { makeMarkTodoEndpoint } from '@/api/endpoints/todos';

export const markTodoRequest = (id: string) => {
  return new PureRestRequest().putRequest({
    endpoint: makeMarkTodoEndpoint(id),
    responseSchema,
  });
};
