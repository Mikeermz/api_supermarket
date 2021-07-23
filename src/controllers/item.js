const { itemService } = require('../services');

const create = async (req, res) => {
  try {
    const item = await itemService.create(req.body);
    
    res.status(202).send({item});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

const findByName = async (req, res) => {
  try {
    // console.log(req.query);
    const { name } = req.query;

    const item = await itemService.findItemByName(name);

    res.status(202).send({item});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

module.exports = {
  create,
  findByName
}
