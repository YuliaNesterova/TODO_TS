import Joi from 'joi';

export const responseSchema = Joi.object().keys({
  data: Joi.object().keys({
    todos: Joi.array().items({
      id: Joi.string(),
      name: Joi.string(),
      checked: Joi.boolean(),
    }),
  }),
});
