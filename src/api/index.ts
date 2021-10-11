import Joi from 'joi';
import { PureRestRequest } from '@mihanizm56/fetch-api';

const TODOS_URL = '/todos';

const responseSchema = Joi.object().keys({
  data: Joi.object().keys({
    todos: Joi.array().items({
      id: Joi.string(),
      name: Joi.string(),
      checked: Joi.boolean(),
    }),
  }),
});

export const getAllTodos = () => {
  return new PureRestRequest().getRequest({
    endpoint: `${TODOS_URL}`,
    responseSchema,
  });
};

export const postNewTodo = (todo: string) => {
  return new PureRestRequest().postRequest({
    endpoint: `${TODOS_URL}`,
    body: {
      todo,
    },
    responseSchema,
  });
};

export const removeTodo = (id: string) => {
  return new PureRestRequest().deleteRequest({
    endpoint: `${TODOS_URL}/${id}`,
    responseSchema,
  });
};

export const markTodo = (id: string) => {
  return new PureRestRequest().putRequest({
    endpoint: `${TODOS_URL}/${id}/status`,
    responseSchema,
  });
};

export const unmarkTodo = (id: string) => {
  return new PureRestRequest().deleteRequest({
    endpoint: `${TODOS_URL}/${id}/status`,
    responseSchema,
  });
};
