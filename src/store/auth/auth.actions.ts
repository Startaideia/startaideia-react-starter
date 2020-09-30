import { authService } from "services";
import { LOADING, LOGIN, SIGNUP, FAILED, LOGOUT } from "./auth.types";

/**
 * Handle user login
 *
 */
export function login(loginData) {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });
      const { data } = await authService.login(loginData);
      dispatch({
        type: LOGIN,
        payload: data.token,
      });
    } catch ({ response }) {
      dispatch({
        type: FAILED,
        payload: response.data.error,
      });
    }
  };
}

/**
 * Signup a user
 *
 */
export function signup(signupData) {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });
      const { data } = await authService.signup(signupData);
      dispatch({
        type: SIGNUP,
        payload: data.token,
      });
    } catch ({ response }) {
      dispatch({
        type: FAILED,
        payload: response.data.error,
      });
    }
  };
}

/**
 * Log a user out
 *
 */
export function logout() {
  return {
    type: LOGOUT,
    payload: null,
  };
}

export default {
  signup,
  logout,
  login,
};
