const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');

const NotFoundError = require('../utils/errors/notFoundError');
const { login, createUser } = require('../controllers/users');
const { loginValidation, createUserValidation } = require('../middlewares/validation');
const { auth } = require('../middlewares/auth');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (_req, _res, next) => next(new NotFoundError('Страница не найдена')));

module.exports = router;
