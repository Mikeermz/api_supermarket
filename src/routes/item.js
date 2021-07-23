const express = require('express');
const router = express.Router();

const { itemValidator } = require('../validators');
const { itemController } = require('../controllers');

router.post('/', itemValidator.create, itemController.create);

// router.get('/all', userController.findUsers);
// router.get('/:id', userController.findUserById);
// router.put('/:id', userValidator.update, userController.updateUserById);
// router.delete('/:id', userValidator.update, userController.deleteUserById);

module.exports = router;
