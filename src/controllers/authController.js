const authService = require('../services/authService');

async function register(req, res) {
  try {
    const user = await authService.registerUser(req.body);

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email
    });

  } catch (error) {

    return res.status(400).json({
      error: error.message
    });

  }
}

async function login(req, res) {
  try {

    const result = await authService.loginUser(req.body);

    return res.status(200).json(result);

  } catch (error) {

    return res.status(401).json({
      error: error.message
    });

  }
}

module.exports = {
  register,
  login
};