export const validatePassword = (pass) => {
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(pass);
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
