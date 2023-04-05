import { Request, Response, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import validateBody from '../middleware/validator.middleware';
import { Checkout, CompanyDataBody, CustomerDataBody } from '../schemas/checkout.schema';
import { companyValidatorSchema, customerValidatorSchema } from '../utils/validator';

const router = Router();

const checkouts: Checkout[] = [];

router.post(
  '/checkout',
  validateBody(companyValidatorSchema),
  (req: Request & { body: CompanyDataBody }, res: Response) => {
    const { companyData } = req.body;
    const checkoutId = uuidv4();
    const checkout: Checkout = {
      id: checkoutId,
      companyData,
    };
    checkouts.push(checkout);
    res.status(201).json({ checkout });
  },
);

router.put(
  '/checkout/:id',
  validateBody(customerValidatorSchema),
  (req: Request & { body: CustomerDataBody }, res: Response) => {
    const { id } = req.params;
    const { customerData } = req.body;

    const checkout = checkouts.find((checkout) => checkout.id === id);

    if (!checkout) {
      res.status(404).json({ error: 'Checkout not found' });
      return;
    }

    checkout.customerData = customerData;

    res.status(200).json({ checkout });
  },
);

router.get('/checkout/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const checkout = checkouts.find((checkout) => checkout.id === id);

  if (!checkout) {
    res.status(404).json({ error: 'Checkout not found' });
    return;
  }

  res.status(200).json({ checkout });
});

export { router };
