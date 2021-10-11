import React from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cn = classNames.bind(styles);

const BLOCK_NAME = 'Header';

export const Header = () => {
  return (
    <section className={cn(BLOCK_NAME)}>
      <h1 className={cn(`${BLOCK_NAME}__title`)}>To do list</h1>
    </section>
  );
};
