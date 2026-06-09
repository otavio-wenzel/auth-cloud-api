const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../database/prisma');

async function registerUser({ name, email, password }) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (existingUser) {
    throw new Error('Usuário já existe');
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash
    }
  });

  return user;
}

async function loginUser({ email, password }) {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user) {
    throw new Error('Email ou senha inválidos');
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!passwordMatch) {
    throw new Error('Email ou senha inválidos');
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );

  return {
    token
  };
}

module.exports = {
  registerUser,
  loginUser
};