import express, { Express } from 'express';

const app: Express = express();
const port: number = 8081;

import { getRandomNumber } from '@typescript-monorepo/common';

app.get('/api/random', (req, res) => {
  res.json({
    data: getRandomNumber()
  });
});

app.listen(port, () => {
  console.log(`API available at http://localhost:${port}/api/random`);
});
