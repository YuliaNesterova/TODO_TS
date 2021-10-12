const router = require('express');
const { celebrate, Joi } = require('celebrate');
const {
  getItems,
  createItem,
  deleteItem,
  markItem,
  unmarkItem,
} = require('../../controllers/todos');

const todosRouter = router.Router();

todosRouter.get('/', getItems);
todosRouter.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      todo: Joi.string().required(),
    }),
  }),
  createItem,
);
todosRouter.delete(
  '//:todoId',
  celebrate({
    params: Joi.object().keys({
      todoId: Joi.string()
        .allow('')
        .required(),
    }),
  }),
  deleteItem,
);
todosRouter.put(
  '//:todoId/status',
  celebrate({
    params: Joi.object().keys({
      todoId: Joi.string()
        .allow('')
        .required(),
    }),
  }),
  markItem,
);
todosRouter.delete(
  '//:todoId/status',
  celebrate({
    params: Joi.object().keys({
      todoId: Joi.string()
        .allow('')
        .required(),
    }),
  }),
  unmarkItem,
);

module.exports.todosRouter = todosRouter;
