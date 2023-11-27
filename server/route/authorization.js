const express = require('express')
const router = express.Router();
const controller = require('../controller/authorization');
const {verifyToken} = require('../middlewares/Authorization');

router.get('/', verifyToken, controller.verify);
router.post('/signup', controller.signUp);
router.post('/signin', controller.signIn);

module.exports = router;