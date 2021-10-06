import Joi from 'joi';
import { PureRestRequest } from "@mihanizm56/fetch-api";

const TODOS_URL: string = '/todos';

const responseSchema = Joi.object().keys({
    data: Joi.object().keys({
        todos: Joi.array().items({
            id: Joi.string(),
            name: Joi.string(),
            checked: Joi.boolean()
        })
    })
});

export const getAllTodos = () => {
    return new PureRestRequest().getRequest({
        endpoint: `${TODOS_URL}`,
        responseSchema: responseSchema
    });
};

export const postNewTodo = (todo: string) => {
   return new PureRestRequest().postRequest({
        endpoint: `${TODOS_URL}`,
        body: {
            todo: todo
        },
       responseSchema: responseSchema
    })
};

export const removeTodo = (id: string) => {
    return new PureRestRequest().deleteRequest({
        endpoint: `${TODOS_URL}/${id}`,
        responseSchema: responseSchema
    })
};

export const markTodo = (id: string) => {
    return new PureRestRequest().putRequest({
        endpoint: `${TODOS_URL}/${id}/status`,
        responseSchema: responseSchema
    })
};

export const unmarkTodo = (id: string) => {
    return new PureRestRequest().deleteRequest({
        endpoint: `${TODOS_URL}/${id}/status`,
        responseSchema: responseSchema
    })
};
