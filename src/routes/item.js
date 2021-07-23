const express = require('express');
const router = express.Router();

const { itemValidator } = require('../validators');
const { itemController } = require('../controllers');

router.post('/', itemValidator.create, itemController.create);
router.get('/', itemValidator.findByName, itemController.findByName);
router.get('/all', itemController.fetchItems);
router.get('/:id', itemController.findItemById);
router.put('/:id', itemController.updatItemById);
router.delete('/:id', itemController.deleteItemById);

module.exports = router;
