import { PureRestRequest } from '@mihanizm56/fetch-api';
import { responseSchema } from '@/api/requests/todos/response-schema';
import { mainTodosEndpoint } from '@/api/endpoints/todos';

export const getAllTodosRequest = () => {
  return new PureRestRequest().getRequest({
    endpoint: mainTodosEndpoint,
    responseSchema,
  });
};
