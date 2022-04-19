import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import users_routes from './handlers/users';
import products_routes from './handlers/products';
import orders_routes from './handlers/orders';

const app: Application = express();

//middleware to secure headers information in http requests
app.use(helmet());

//middleware to parse incomming requests
app.use(express.json());

const port = process.env.PORT;

app.get('/', async (_req: Request, res: Response) => {
  res.send('Storefront backend APIs');
});

users_routes(app);
products_routes(app);
orders_routes(app);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

export default app;
