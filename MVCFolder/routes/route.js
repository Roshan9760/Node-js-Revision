const express = require('express');
const {getUserController, addUserController} = require('../controllers/userController');

const router = express.Router();

router.get('/',getUserController);
router.post('/add',addUserController);


module.exports = router