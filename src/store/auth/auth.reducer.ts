import { LOADING, LOGIN, FAILED, SIGNUP, LOGOUT } from "./auth.types";

const INITIAL_STATE = {
  token: localStorage.getItem("__auth"),
  error: null,
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      localStorage.setItem("__auth", payload);
      return { ...state, token: payload, loading: false, error: null };
    case SIGNUP:
      localStorage.setItem("__auth", payload);
      return { ...state, token: payload, loading: false, error: null };
    case FAILED:
      return { ...state, token: null, loading: false, error: payload };
    case LOGOUT:
      localStorage.removeItem("__auth");
      return { ...state, token: null, loading: false, error: null };
    case LOADING:
      return { ...state, loading: payload };
  }
  return { ...state };
}
