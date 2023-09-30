export const startSession = (user) => {
  sessionStorage.setItem("email", user.email);
  sessionStorage.setItem("uid", user.uid);
};

export const getSession = () => {
  return {
    email: sessionStorage.getItem("email"),
    uid: sessionStorage.getItem("uid"),
  };
};

export const endSession = () => {
  sessionStorage.clear();
};

export const isLoggedIn = () => {
  return getSession().uid;
};
