import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Form, Field } from 'react-final-form';
import { BasicPlusIcon, ButtonLink } from '@wildberries/ui-kit';
import { FormApi } from 'final-form';
import styles from './form-element.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Form';

type PropsType = {
  onHandleAddTodo: (values: object, form: FormApi<{ todo: string }>) => void;
};

export const FormElement = memo(({ onHandleAddTodo }: PropsType) => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Form
        onSubmit={onHandleAddTodo}
        render={({ handleSubmit }) => (
          <form
            className={cn(`${BLOCK_NAME}__element`)}
            onSubmit={handleSubmit}
          >
            <Field
              className={cn(`${BLOCK_NAME}__input`)}
              component="input"
              name="todo"
              placeholder="Add todo"
              type="text"
            />
            <ButtonLink rightIcon={BasicPlusIcon} type="submit" />
          </form>
        )}
      />
    </div>
  );
});
