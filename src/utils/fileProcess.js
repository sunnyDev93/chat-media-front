//for free users
export const isBigFile = (file) => {
  if (file.size / (1024 * 1024) > 10) {
    // toast.error("Please charge your token");
    return true;
  }
};
