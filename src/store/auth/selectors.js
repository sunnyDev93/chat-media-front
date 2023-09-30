import { NAME } from "./constants";

export const getToken = (state) => state.persistedReducer.auth.token;
export const getUID = (state) => state[NAME].uid;
export const getUser = (state) => state[NAME].user;
export const getError = (state) => state[NAME].error;
