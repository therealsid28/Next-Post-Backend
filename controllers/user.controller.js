import { asyncErrorHandler } from '../utils/ErrorHandeling.js';

const updateUser = asyncErrorHandler(async (req, res, next) => {
  const { name, settings } = req.body;

  res.status(200).json({
    message: 'ok',
  });
});

export { updateUser };
