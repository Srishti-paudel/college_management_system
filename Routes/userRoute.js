const { loginUser } = require('../controllers/userController');
const { registerUser } = require('../controllers/userController');

const router= require('express').Router();
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
module.exports=router;