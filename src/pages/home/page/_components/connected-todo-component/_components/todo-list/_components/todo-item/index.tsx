import React, { memo, useCallback } from 'react';
import {
  BasicTrashIcon,
  ButtonLink,
  Checkbox,
  Text,
} from '@wildberries/ui-kit';
import classNames from 'classnames/bind';
import { ParamsType } from '../../../../types';
import styles from './index.module.scss';

const cn = classNames.bind(styles);
const BLOCK_NAME = 'Todo-item';

type PropsType = {
  id: string;
  name: string;
  checked: boolean;
  onCheckboxClick: ({ id, checked }: ParamsType) => void;
  onDeleteTodo: (id: string) => void;
};

export const TodoItem = memo(
  ({ id, name, checked, onCheckboxClick, onDeleteTodo }: PropsType) => {
    const handleClick = useCallback(() => {
      onCheckboxClick({ id, checked });
    }, [onCheckboxClick, id, checked]);

    const handleDelete = useCallback(() => {
      onDeleteTodo(id);
    }, [onDeleteTodo, id]);

    return (
      <li className={cn(BLOCK_NAME)}>
        <Text color="black" size="h4" tagType="h4" text={name} />
        <div className={cn(`${BLOCK_NAME}__buttons`)}>
          <Checkbox
            checked={checked}
            id={`${id}-checkbox`}
            name="todo"
            onClick={handleClick}
          />
          <ButtonLink
            onClick={handleDelete}
            rightIcon={BasicTrashIcon}
            size="small"
          />
        </div>
      </li>
    );
  },
);
