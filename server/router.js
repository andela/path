const Router = require('express').Router;
const Auth = require('./controllers/auth');

const router = new Router();

router.post('/login', Auth.logIn);
router.post('/signup', Auth.signUp);

module.exports = router;
