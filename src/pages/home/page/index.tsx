import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { ConnectedTodoPage } from './_components/connected-todo-page';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Home-page';

export const Page = memo(() => (
  <div className={cn(BLOCK_NAME)} data-page="home-page">
    <aside className={cn(`${BLOCK_NAME}__sidebar`)} />
    <div className={cn(`${BLOCK_NAME}__card-wrapper`)}>
      <ConnectedTodoPage />
    </div>
  </div>
));
