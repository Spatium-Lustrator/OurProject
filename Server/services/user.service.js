const user_model = require("../models/user.model");

class UserService {
  async registration(email, password, code, name) {
    console.log(email, password, code, name);
    const candidate = await user_model.findOne({
      where: { user_code: code },
    });
    if (candidate) {
      return "Пользователь с таким кодом уже есть";
    }

    const new_user = new user_model({
      user_email: email,
      user_password: password,
      user_code: code,
      user_name: name,
    });
    await new_user.save();
    return "yes";
  }

  async login(email, password) {
    const user = await user_model.findOne({
      where: { user_email: email, user_password: password },
    });
    if (!user) {
      return "Ошибка в email/пароле";
    }
    return "yes";
  }
}

module.exports = new UserService();
