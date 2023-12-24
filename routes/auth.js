const { loginController, signupController, getUserById } = require('../controller/auth');

const router = require('express').Router();

router.post('/login' , loginController)

router.post('/signup' , signupController)
router.post('/user/:id' , getUserById)


module.exports = router;