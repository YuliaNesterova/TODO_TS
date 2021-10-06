import React, { useState, memo, useCallback } from 'react';
import { SimpleInputChangeEventType } from "@wildberries/ui-kit";
import { FormElement} from '../form-element/form-element';

type propsTypes = {
    onAddTodo: (todo: string) => void;
}

export const Form = memo(({ onAddTodo }: propsTypes) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (event: SimpleInputChangeEventType) => {
        setInputValue(event.value);
    }

    const handleAddItem = useCallback(() => {
        onAddTodo(inputValue || '');
        setInputValue('');
    }, [onAddTodo, inputValue]);


    return (
       <FormElement onChange={handleChange} onHandleAddItem={handleAddItem} inputValue={inputValue}/>
    )
});