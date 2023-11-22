const express = require('express')
const router = express.Router();
const controller = require('../controller/authorization');

router.get('/', controller.verify);
router.get('/signup', controller.signUp);
router.get('/signin', controller.signIn);

module.exports = router;