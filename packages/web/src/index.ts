import express, { Express } from 'express';

const app: Express = express();
const port: number = 8080;

import { getRandomNumber } from '@typescript-monorepo/common';

app.get('/', (req, res) => {
  res.send(`<h1>Your random number - ${getRandomNumber()}</h1>`);
});

app.listen(port, () => {
  console.log(`Web available at http://localhost:${port}`);
});
