const authService = require('../services/authService');

const prisma = require('../database/prisma');

async function register(req, res) {
  try {

    const dto = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    const user = await authService.registerUser(dto);

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

    const dto = {
      email: req.body.email,
      password: req.body.password
    };

    const result = await authService.loginUser(dto);

    return res.status(200).json(result);

  } catch (error) {

    return res.status(401).json({
      error: error.message
    });

  }
}

async function profile(req, res) {

  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id
    }
  });

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email
  });

}

async function changePassword(req, res) {

  try {

    const {
      currentPassword,
      newPassword
    } = req.body;

    const result =
      await authService.changePassword(
        req.user.id,
        currentPassword,
        newPassword
      );

    return res.status(200).json(result);

  } catch (error) {

    return res.status(400).json({
      error: error.message
    });

  }

}

module.exports = {
  register,
  login,
  profile,
  changePassword
};