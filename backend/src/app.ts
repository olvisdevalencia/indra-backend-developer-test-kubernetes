import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Product } from './models/product';

const app: Application = express();
app.use(cors());
app.use(cors({
  origin: '*'
}));
const PORT = process.env.PORT || 4000;

const products: Product[] = [
  { productId: 1, title: 'Product 01' },
  { productId: 2, title: 'Product 02' },
];

app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
