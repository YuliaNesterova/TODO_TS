import React, { memo } from 'react';
import {BasicTrashIcon, ButtonLink, Checkbox} from "@wildberries/ui-kit";
import styles from './todo-item.module.scss';
import classNames from "classnames/bind";

const cn = classNames.bind(styles);
const BLOCK_NAME = 'Todo';

type propsType = {
    id: string;
    name: string;
    checked: boolean;
    onCheckBoxClick: () => void;
    onDeleteTodo: () => void;
}

export const TodoItem = memo(({ id, name, checked, onCheckBoxClick, onDeleteTodo}: propsType) => {
    const textClassName: string = checked ? `${cn(`${BLOCK_NAME}__text`)} ${cn(`${BLOCK_NAME}__text_checked`)}` : cn(`${BLOCK_NAME}__text`);

    return (
        <li className={cn(`${BLOCK_NAME}`)} id={id}>
            <p className={textClassName}>{name}</p>
            <div className={cn(`${BLOCK_NAME}__buttons`)}>
                <Checkbox checked={checked} id={`${id}-checkbox`} name="todo" onClick={onCheckBoxClick}/>
                <ButtonLink rightIcon={BasicTrashIcon} size="small" onClick={onDeleteTodo}/>
            </div>
        </li>
    )
});