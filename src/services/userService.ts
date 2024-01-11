import User from "../Model/user";

class UserService {
  async createUser(textId: string, password: string) {
    const result = await User.create({
      textId: textId,
      password: password,
    });
    return result;
  }
}
export default UserService;
