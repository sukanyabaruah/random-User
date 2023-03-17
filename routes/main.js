const express = require('express');

const router = express.Router();

const {getUsers} = require('../controllers/main');

router.route('/').get(getUsers)

module.exports = router;