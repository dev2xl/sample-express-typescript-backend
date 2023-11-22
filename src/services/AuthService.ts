import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '@/models/UserModel';
import { User } from '@/interfaces/user';

/**
 * Create a json web token
 * @param login
 * @param password
 */
export const createAuthToken = async (login: string, password: string) => {
  // check if the login and password exist
  if (!login || !password) {
    return new Error('Invalid login or password');
  }

  // get the user with the email
  const user = await UserModel.findOne<User | null>({ email: String(login) });

  if (!user) {
    return new Error('Invalid login or password');
  }

  // check if the password is valid
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return new Error('Invalid login or password');
  }

  // return a signed token with the user id inside
  return jsonwebtoken.sign(user._id.toString(), process.env.SECRET);
};
