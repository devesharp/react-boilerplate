/* eslint-disable @typescript-eslint/no-empty-interface */
export interface IStore {}

export interface IAction<T> {
   type: string;
   payload: T;
}
