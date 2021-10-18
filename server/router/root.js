const express = require('express');
const {i18nRouter} = require("./i18n");
const { todosRouter } = require('./todos');

const rootRouter = express.Router();
rootRouter.use('/I18N', i18nRouter);

rootRouter.use('/todos', todosRouter);

module.exports.rootRouter = rootRouter;
