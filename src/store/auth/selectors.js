import { createSelector } from "reselect";
import { NAME } from "./constants";

// export const getToken = (state) => state.persistedReducer.auth.token;
export const getUID = (state) => state[NAME].uid;
export const getUser = (state) => state[NAME].user;
export const getError = (state) => state[NAME].error;
// export const getAuthStatus = (state) => state[NAME].isAuthenticated;

const selectRoot = (state) => state.persistedReducer; // Use the top-level key 'root'

// Create a selector to get the token from the auth slice
export const getToken = createSelector(
  selectRoot, // Update this to select the 'root' key
  (root) => root.auth?.token // Access auth.token from the 'root' slice
);

// Create a selector to get the user object from the auth slice
export const selectUser = createSelector(
  selectRoot, // Update this to select the 'root' key
  (root) => root.auth?.user?.user // Access auth.user from the 'root' slice
);

export const getAuthStatus = createSelector(
  selectRoot, // Update this to select the 'root' key
  (root) => root.auth?.isAuthenticated // Access auth.user from the 'root' slice
);

export const isLoadingStatus = createSelector(
  selectRoot, // Update this to select the 'root' key
  (root) => root.auth?.isLoading // Access auth.user from the 'root' slice
);
