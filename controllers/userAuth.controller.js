import User from '../models/User/User.js';
import bcrypt from 'bcrypt';
import AppError from '../utils/AppError.js';
import { asyncErrorHandler } from '../utils/ErrorHandeling.js';
import jwt from 'jsonwebtoken';

const userSignup = asyncErrorHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new AppError('Provide all the details', 404));
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new AppError('User already exists', 409));
  }

  const hasshedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({ name, email, password: hasshedPassword });

  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      plan: user.plan,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '5d',
    }
  );

  res.cookie('access_token', token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.status(200).json({
    message: 'ok',
    data: {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        plan: user.plan,
      },
      token: token,
    },
  });
});

export { userSignup };
