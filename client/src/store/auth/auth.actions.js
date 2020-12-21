import AuthActionTypes from "./auth.types";

const login = (loginData) => ({
  type: AuthActionTypes.LOGIN,
  payload: { ...loginData },
});

export default login;
