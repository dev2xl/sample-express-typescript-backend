import jsonwebtoken from "jsonwebtoken";

/**
 * Create a json web token
 * @param login
 * @param password
 */
export const createAuthToken = (login: string, password: string) => {

  // find the user on DB with login, if exists then compare with bcrypt the password
  // if it is all good sign the token and return it
  if (!login || !password) {
    return new Error("Invalid login or password")
  }

  return jsonwebtoken.sign(login, process.env.SECRET);

};
