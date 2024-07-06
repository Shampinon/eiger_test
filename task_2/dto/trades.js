const zod = require('zod');

const id = zod.coerce.number().int().min(1);

const tradeId = id;
const tradeType = zod.enum(['sell', 'buy']);

const tradeCreationDto = zod.object({
  type: tradeType,
  shares: zod.number().int().min(1).max(100),
  symbol: zod.string().min(1),
  price: zod.number().int().min(1),
  user_id: id,
  timestamp: zod.number().int().min(1),
});

const tradeFiltersDto = zod.object({
  user_id: id,
  type: zod.string(), // idk why whe should accept string types, but it should be tradeType,
}).partial().optional();

module.exports = {
  tradeId,
  tradeCreationDto,
  tradeFiltersDto,
};