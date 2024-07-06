const Trade = require('../models/trades');

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const trade = await Trade.findByPk(id);

    if (trade === null) {
      res.status(404).send('ID not found');

      return;
    }

    res.status(200).json(trade);

    return;
  } catch (e) {
    res.status(500).send();

    return;
  }
}

const getSeveral = async (req, res) => {
  const whereClause = req.query;

  try {
    const trades = await Trade.findAll({
      where: whereClause,
    });
  
    res.status(200).json(trades);

    return;
  } catch (e) {
    res.status(500).send();

    return;
  }
};

const createOne = async (req, res) => {
  const { user_id, type, symbol, shares, price, timestamp } = req.body;

  try {
    const trade = await Trade.create({
      user_id,
      type,
      symbol,
      shares,
      price,
      timestamp,
    });
  
    res.status(201).json(trade);

    return;
  } catch (e) {
    res.status(500).send();

    return;
  }
};

module.exports = {
  getOne,
  getSeveral,
  createOne,
};