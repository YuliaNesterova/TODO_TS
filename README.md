<<<<<<< HEAD
[![Tested with TestCafe](https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg)](https://github.com/DevExpress/testcafe)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Wildberries React Boilerplate

# Основные замечания
 - Linux/Macos/Windows(с bash) совместимость (для некоторых команд также требуется установленный Docker)
 - Фрактальная архитектура проекта
 - Typescipt/pure js
 - Router 5
 - CRA v3 & rewired
 - Express/Nginx (http2+server_push) сервер статики
 - Redux-ducks/Databus/Graphql стейт-менеджеры
 - Microservice/Monolith поддерживаемые архитектуры
 - install & healthcheck при установке
 - параллельный анимированный запуск прекоммит проверок
 - Commitizen+Commitlint
 - Express для мок-сервера


## Установка
```javascript
$ npx @wildberries/create-react-boilerplate (далее выбор модификации и путь до директории установки в консоли)
``` 
## Подготовка
```javascript
$ npm run setup
``` 

## Запуск
```javascript
$ npm run wb
``` 

# Структура проекта
```
├── README.md - Документация
├── build – Результат сборки
├── cli – CLI бойлерплейта
├── config – Конфигурации бойлерплейта
├── public – Статика доступная из корня после сборки
├── server – Мок-сервер бойлерплейта и сервер статики (в зависимости от модифицикации)
├── src
│   ├── _assets – Папка с ассетами (может распологаться на любом уровне вложенности)
│   ├── _databus – Мапка с модулями Databus (может распологаться на любом уровне вложенности)
│   │   └── databus модули...
│   │       ├── action-creators - сайд эффекты проекта (like redux-thunk)
│   │       ├── selectors - селекторы Databus
│   │       │   ├── selectors.ts - селекторы чистого Databus
│   │       │   └── subscriber-selectors.ts - селекторы React-адаптера Subscriber (@ravilm/databus-react) (like redux)
│   │       |
│   │       ├── actions.ts - actions Databus (like redux)
│   │       ├── events.ts - events Databus (like redux)
│   │       └── listeners.ts - listeners Databus (like redux)
│   │
│   ├── _redux – Папка с модулями redux (может распологаться на любом уровне вложенности)
│   │   └── redux-ducks модули...
│   │
│   ├── _constants – Константы (может распологаться на любом уровне вложенности) (может быть как файлом так и папкой)
│   ├── _utils – Утилиты основного уровня проекта (может распологаться на любом уровне вложенности)
│   ├── _types – Типы (может распологаться на любом уровне вложенности) (может быть как файлом так и папкой)
│   ├── _components – React компоненты (может распологаться на любом уровне вложенности)
│   ├── _layouts – Шаблоны для страниц (может распологаться на любом уровне вложенности)
│   ├── api – Папка с запросами
│   ├── pages – Точка входа роутинга проекта
|   |   ├── store-inject-config – Настройки для запросов за данными при заходе на страницу роутинга
│   │   └── pages модули...
│   |
│   ├── index.tsx – Точка входа проекта
│   ├── react-app-env.d.ts – Глобальные типы проекта
│   └── ... Манифесты настроек проекта
│
├── utils – Утилиты верхнего уровня проекта (не путать с _utils)
└── ... манифесты настроек проекта
```
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
>>>>>>> 8feb3c2eeef610c57dbcfa72ef170a10d0b0bb1d
