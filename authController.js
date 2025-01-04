const User = require("../models/User");
const { generateToken } = require("../config/auth");

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  const token = generateToken(user);
  res.json({ token });
};

module.exports = { login };
