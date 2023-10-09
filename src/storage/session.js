export const startSession = (accessToken) => {
  // sessionStorage.setItem("email", user.email);
  sessionStorage.setItem("token", accessToken);
};

export const getSession = () => {
  return {
    // email: sessionStorage.getItem("email"),
    token: sessionStorage.getItem("token"),
  };
};

export const endSession = () => {
  sessionStorage.clear();
};

export const isLoggedIn = () => {
  return getSession().token;
};
