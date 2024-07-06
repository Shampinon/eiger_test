const express = require('express');
const router = express.Router();
const { pipeTradeFiltersQuery, pipeTradeParams, pipeTradeCreationPayload } = require('../middleware/trades');
const { getOne, getSeveral, createOne } = require('../controllers/trades');


router.get('/:id', pipeTradeParams, getOne);

router.get('/', pipeTradeFiltersQuery, getSeveral);

router.post('/', pipeTradeCreationPayload, createOne);

router.all('/:id', function(req, res) {
  res.status(405).send();
});

module.exports = router;
