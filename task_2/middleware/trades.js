const { tradeFiltersDto, tradeId, tradeCreationDto } = require('../dto/trades');

const pipeTradeFiltersQuery = (req, res, next) => {
  try {
    req.query = tradeFiltersDto.parse(req.query);
    next();

    return;
  } catch (e) {
    res.status(400).send();

    return;
  }
};

const pipeTradeParams = (req, res, next) => {
  try {
    req.params.id = tradeId.parse(req.params.id);
    next();

    return;
  } catch (e) {
    res.status(400).send();

    return;
  }
};

const pipeTradeCreationPayload = (req, res, next) => {
  try {
    req.body = tradeCreationDto.parse(req.body);
    next();

    return;
  } catch (e) {
    res.status(400).send();

    return;
  }
};

module.exports = {
  pipeTradeCreationPayload,
  pipeTradeFiltersQuery,
  pipeTradeParams,
};