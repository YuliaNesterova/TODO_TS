import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Form, Field } from 'react-final-form';
import {
  BasicPlusIcon,
  ButtonLink,
  FormSimpleInput,
} from '@wildberries/ui-kit';
import { FormApi } from 'final-form';
import {
  onlyLetters,
  minLetters,
  maxLetters,
  composeValidators,
} from './_utils';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Form-view';

type PropsType = {
  onAddTodo: ({ todo }: { todo: string }, form: FormApi) => void;
};

export const FormView = memo(({ onAddTodo }: PropsType) => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Form
        onSubmit={onAddTodo}
        render={({ handleSubmit, invalid }) => (
          <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
            <Field
              name="todo"
              type="text"
              validate={composeValidators(onlyLetters, minLetters, maxLetters)}
            >
              {({ input, meta }) => (
                <FormSimpleInput
                  id="todo"
                  input={input}
                  meta={{ error: meta.error }}
                  name={input.name}
                  placeholder="Add todo"
                />
              )}
            </Field>
            <ButtonLink
              disabled={invalid}
              rightIcon={BasicPlusIcon}
              type="submit"
            />
          </form>
        )}
      />
    </div>
  );
});
