const userService = require("../services/user.service");
const tokenService = require("../services/token.service");

class AuthController {
  async registration(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const userData = await userService.registration(email, password);
      console.log(userData);
      res.cookie(userData, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json(userData);
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res) {
    try {
      res.set("Access-Control-Allow-Origin", "*");
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {}
  }

  async getUsers(req, res) {
    try {
      res.json("sozdal vse");
    } catch (e) {}
  }
}
module.exports = new AuthController();
