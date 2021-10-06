import React from 'react';
import styles from './header.module.scss';
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const BLOCK_NAME = 'Header';

export const Header = () => {
    return (
        <section className={cn(`${BLOCK_NAME}`)}>
            <h1 className={cn(`${BLOCK_NAME}__title`)}>To do list</h1>
        </section>
    )
};
