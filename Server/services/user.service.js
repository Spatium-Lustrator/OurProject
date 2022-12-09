const user_model = require("../models/user.model");
const tokenService = require("./token.service");
const UserDto = require("../dtos/user.dto");

class UserService {
  async registration(email, password) {
    const candidate = await user_model.findOne({
      where: { user_email: email },
    });
    if (candidate) {
      throw new Error("пользователь с таким именем уже есть");
    }

    const new_user = new user_model({
      user_email: email,
      user_password: password,
    });
    await new_user.save();
    return "yes";
    // const user = await user_model.findOne({where:{user_name: name}})
    // const userId = user.user_id
    // const userDto = new UserDto(name, userId)
    // const tokens = tokenService.generateTokens({...userDto})
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);
    // return {...tokens}
  }

  async login(email, password) {
    let error = "none";
    const user = await user_model.findOne({ email });
    if (!user) {
      error = "Пользователь с таким именем не найден";
      return error;
    }
    if (!password) {
      error = "неверный пароль";
      return error;
    }
    console.log(error);
    return error;
  }
}

module.exports = new UserService();
