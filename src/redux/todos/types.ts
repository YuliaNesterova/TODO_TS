export type SimpleAction = { type: string };
export type Action = (arg: string) => { type: string, payload: string };

export type ActionsTypes = {
    type: string;
    payload: string;
};