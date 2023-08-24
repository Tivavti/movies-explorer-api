const userRouter = require('express').Router();
const {
  getUser,
  updateUser,
  logout,
} = require('../controllers/users');
const { updateUserValidation } = require('../middlewares/validation');

userRouter.get('/me', getUser);
userRouter.patch('/me', updateUserValidation, updateUser);
userRouter.post('/me/logout', logout);

module.exports = userRouter;
