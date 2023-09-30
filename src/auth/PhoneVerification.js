const phoneverif = () => {
  if (mynumber === "" || mynumber.length < 10) return;

  let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  auth
    .signInWithPhoneNumber(mynumber, verify)
    .then((result) => {
      setfinal(result);
      alert("code sent");
      setshow(true);
    })
    .catch((err) => {
      alert(err);
      window.location.reload();
    });
};

// Validate OTP
const ValidateOtp = () => {
  if (otp === null || final === null) return;
  final
    .confirm(otp)
    .then((result) => {
      // success
    })
    .catch((err) => {
      alert("Wrong code");
    });
};
