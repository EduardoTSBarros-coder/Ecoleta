import express, { Response, Request } from 'express';

const app = express();

app.get('/users', (request: Request, response: Response) => {
  response.json({ message: 'Hello World' });
});

app.listen(3333);
