import React, { memo } from 'react';
import { Text } from '@wildberries/ui-kit';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const BLOCK_NAME = 'Header';

export const Header = memo(() => {
  return (
    <section className={cn(BLOCK_NAME)}>
      <Text color="black" isUpperCase size="h1" text="To do list" />
    </section>
  );
});
