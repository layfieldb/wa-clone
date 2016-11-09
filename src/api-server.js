import express from 'express';
import { setupRedis, getRedisClient } from './redis-client';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/redis-test', (req, res) => {
  getRedisClient.incr('inc-test', (err, result) => {
    if (err) {
      res.send('Error incrementing redis test');
    } else {
      res.send(`Redis increment test result: ${result}`);
    }
  });
});

setupRedis();

app.listen(port, () => {
    console.log(`Server running at port ${port}.`);
});