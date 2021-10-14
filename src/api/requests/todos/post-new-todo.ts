import { PureRestRequest } from '@mihanizm56/fetch-api';
import { responseSchema } from '@/api/requests/todos/response-schema';
import { mainTodosEndpoint } from '@/api/endpoints/todos';

export const postNewTodo = ({ body }: { body: string }) => {
  return new PureRestRequest().postRequest({
    endpoint: mainTodosEndpoint,
    body: {
      todo: body,
    },
    responseSchema,
  });
};
