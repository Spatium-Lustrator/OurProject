const userService = require("../services/user.service");
const tokenService = require("../services/token.service");

class AuthController {
  async registration(req, res) {
    try {
      res.set("Access-Control-Allow-Origin", "*");
      const { email, password, code, name } = req.body;
      const userData = await userService.registration(
        email,
        password,
        code,
        name
      );
      res.cookie({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({
        return: userData,
        name: req.body.name,
        code: req.body.code,
        email: req.body.email,
        password: req.body.password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res) {
    try {
      res.set("Access-Control-Allow-Origin", "*");
      const email = req.body.email;
      const password = req.body.password;
      const userData = await userService.login(email, password);
      return res.json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async getUsers(req, res) {
    try {
      res.json("sozdal vse");
    } catch (e) {}
  }
}

module.exports = new AuthController();
