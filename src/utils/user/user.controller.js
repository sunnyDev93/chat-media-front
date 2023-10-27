export const fetchAllUsers = async () => {
  const headers = {
    // Authorization: 'Bearer ' + token,
    "Content-Type": "application/json",
  };
  try {
    const response = await fetch("http://localhost:8000/api/auth/users", {
      method: "GET",
      headers: headers,
    });
    const resData = await response.json();
    if (resData) {
      const users = resData?.users;
      // console.log(Date(users[0].influDate));
      return users;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getReferedUsersCnt = (users, referalCode) => {
  let cnt = 0;
  if (referalCode) {
    users && users?.map((user) => user.referedCode === referalCode && cnt++);
  }
  return cnt;
};

export const getReferedFreeUsersCnt = (users, referalCode) => {
  let cnt = 0;
  if (referalCode) {
    users &&
      users?.map((user) =>
        user.referedCode === referalCode && user.plan === "free" ? cnt++ : cnt
      );
  }
  return cnt;
};

export const getReferedBasicUsersCnt = (users, referalCode) => {
  let cnt = 0;
  if (referalCode) {
    users &&
      users?.map((user) =>
        user.referedCode === referalCode && user.plan === "Basic" ? cnt++ : cnt
      );
  }
  return cnt;
};

export const getReferedAdvancedUsersCnt = (users, referalCode) => {
  let cnt = 0;
  if (referalCode) {
    users &&
      users?.map((user) =>
        user.referedCode === referalCode && user.plan === "Advanced"
          ? cnt++
          : cnt
      );
  }
  return cnt;
};

export const getReferedProUsersCnt = (users, referalCode) => {
  let cnt = 0;
  if (referalCode) {
    users &&
      users?.map((user) =>
        user.referedCode === referalCode && user.plan === "Pro" ? cnt++ : cnt
      );
  }
  return cnt;
};
