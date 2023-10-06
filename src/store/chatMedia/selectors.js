export const selectTranscript = (state) =>
  state.persistedReducer.chatMedia.transcript;

// Select the user's authentication status (e.g., authenticated or not)
export const selectIsSelected = (state) =>
  state.persistedReducer.chatMedia.isSelected;

// Select the user's information (e.g., username, email)
export const selectUserInfo = (state) => state.auth.userInfo;
