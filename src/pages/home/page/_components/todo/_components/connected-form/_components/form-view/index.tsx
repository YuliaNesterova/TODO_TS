import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Form, Field } from 'react-final-form';
import {
  BasicPlusIcon,
  ButtonLink,
  FormSimpleInput,
} from '@wildberries/ui-kit';
import { FormApi } from 'final-form';
import i18next from 'i18next';
import { TODO_PAGE_TRANSLATIONS } from '@/pages/home/_constants/translations';
import { fieldValidations } from './_utils';
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
              component={FormSimpleInput}
              id="todo-input"
              name="todo"
              placeholder={i18next.t(`${TODO_PAGE_TRANSLATIONS.placeholder}`)}
              type="text"
              validate={fieldValidations}
            />
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
