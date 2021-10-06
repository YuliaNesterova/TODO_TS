import { ActionsTypes } from './types';

const initialState: any[] = [];

const todosReducer = (state = initialState, { type, payload }: ActionsTypes ) => {
    switch (type) {
        case 'FETCH_TODOS_SUCCESS':
            return [...payload];
        case 'FETCH_TODOS_ERROR':
            console.log('Error: ', payload);
            return state;
        default:
            return state;
    }
}

export default todosReducer;