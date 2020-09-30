import apiService from "./api.service";

export class AuthService {
  /**
   * Logs a user in
   *
   */
  login(loginData) {
    return apiService().post("/login", loginData);
  }

  /**
   * Signup a new user
   *
   */
  signup(signupData) {
    return apiService().post("/register", signupData);
  }
}

export default new AuthService();
