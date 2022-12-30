const router = require("express").Router();
const { default: axios } = require("axios");
// to save in mongoos db
const { userModel } = require("./models/User");
const { hashedData } = require("./models/Utiles");
router.get("/", async (req, res, next) => {
  try {
    const users = await userModel.find({});
    return res.json(users);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      })
      .then((response) => response.data);
    const userId = users.filter((item) => item.id == id);
    return res.json(userId);
    // return res.json(users);
  } catch (error) {
    next(error);
  }
});
router.post("/Create", async (req, res, next) => {
  try {
    const { first_name, lastName, password, email } = req.body;
    const hashedPassword = hashedData(password);
    const userResult = await userModel.create({
      first_name,
      lastName,
      password: hashedPassword,
      email,
    });
    if (userResult) {
      return res.json(userResult);
    }
    throw { status: 500, message: "user not found" };
  } catch (error) {
    next(error);
  }
});
module.exports = router;
