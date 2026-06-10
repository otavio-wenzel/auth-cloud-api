const { body } = require('express-validator');

const registerValidation = [
  body('name')
    .notEmpty()
    .withMessage('Nome é obrigatório'),

  body('email')
    .isEmail()
    .withMessage('Email inválido'),

  body('password')
    .isLength({ min: 6 })
    .withMessage(
      'Senha deve ter pelo menos 6 caracteres'
    )
];

const loginValidation = [
  body('email')
    .isEmail()
    .withMessage('Email inválido'),

  body('password')
    .notEmpty()
    .withMessage('Senha obrigatória')
];

module.exports = {
  registerValidation,
  loginValidation
};