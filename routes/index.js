const router = require('express').Router();
const authRoute = require('./auth');
const postRoute = require('./post');
router.use('/auth' , authRoute)
router.use('/' , postRoute)


module.exports = router