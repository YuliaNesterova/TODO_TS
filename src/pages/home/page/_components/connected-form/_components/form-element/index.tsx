import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import {
  BasicPlusIcon,
  ButtonLink,
  FormSimpleInput,
} from '@wildberries/ui-kit';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Form-element';

type PropsType = {
  onAddTodo: ({ todo }: { todo: string }) => void;
};

export const FormElement = memo(({ onAddTodo }: PropsType) => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Form
        onSubmit={onAddTodo}
        render={({ handleSubmit }) => (
          <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
            <Field component={FormSimpleInput} name="todo" />

            <ButtonLink rightIcon={BasicPlusIcon} type="submit" />
          </form>
        )}
      />
    </div>
  );
});
