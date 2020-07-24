import {User} from "..";

export default async function(
  firstName: String,
  lastName: String,
  email: String,
  password: String
  ) {
  return await User.create({firstName, lastName, email, password});
}