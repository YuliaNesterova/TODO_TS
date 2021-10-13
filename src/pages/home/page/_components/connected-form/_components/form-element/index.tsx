import React, { memo, useCallback } from 'react';
import classnames from 'classnames/bind';
import { Form } from 'react-final-form';
import {
  BasicPlusIcon,
  ButtonLink,
  FormSimpleInput,
} from '@wildberries/ui-kit';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Form-element';

type PropsType = {
  onAddTodo: () => void;
  errorText: string;
  disabled: boolean;
  value: string;
  onChange: (event: string) => void;
  onFocus: () => void;
  onBlur: () => void;
};

export const FormElement = memo(
  ({
    onAddTodo,
    errorText,
    disabled,
    value,
    onChange,
    onFocus,
    onBlur,
  }: PropsType) => {
    const makePropsForInput = useCallback(() => {
      return {
        onBlur,
        onChange,
        onFocus,
        name: 'todo',
        type: 'text',
        value,
      };
    }, [onBlur, onChange, onFocus, value]);

    return (
      <div className={cn(BLOCK_NAME)}>
        <Form
          onSubmit={onAddTodo}
          render={({ handleSubmit }) => (
            <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
              <FormSimpleInput
                id="todo-input"
                input={makePropsForInput()}
                meta={{ error: `${errorText}` }}
                name="todo"
                placeholder="Add Todo"
              />
              <ButtonLink
                disabled={disabled}
                rightIcon={BasicPlusIcon}
                type="submit"
              />
            </form>
          )}
        />
      </div>
    );
  },
);
