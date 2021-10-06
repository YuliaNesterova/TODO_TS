import React, { memo } from 'react';
import styles from './form-element.module.scss';
import classnames from 'classnames/bind';
import {BasicPlusIcon, ButtonLink, SimpleInput, SimpleInputChangeEventType} from "@wildberries/ui-kit";

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Form';

type propsType = {
    onChange: (event: SimpleInputChangeEventType) => void;
    inputValue: string;
    onHandleAddItem: () => void;
}

export const FormElement = memo(({onChange, inputValue, onHandleAddItem}: propsType) => {
    return (
        <div className={cn(`${BLOCK_NAME}`)}>
            <SimpleInput type="text" name="todo-input" placeholder="Add todo" onChange={onChange} value={inputValue} id="todo-input"/>
            <ButtonLink type="submit" rightIcon={BasicPlusIcon} onClick={onHandleAddItem}/>
        </div>
    )
});