import jsonwebtoken from "jsonwebtoken";

/**
 * Create a json web token combining the login+password
 * @param login
 * @param password
 */
export const createAuthToken = (login: string, password: string) => {
  const response = login + password;
  return jsonwebtoken.sign(response, process.env.SECRET);
};
