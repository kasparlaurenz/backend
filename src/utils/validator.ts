import { z } from 'zod';

export const companyValidatorSchema = z.object({
  companyData: z.object({
    name: z.string().min(2).max(60),
    phone: z
      .string()
      .min(2)
      .max(20)
      .regex(/^[0-9]+$/),
  }),
});

export const customerValidatorSchema = z.object({
  customerData: z.object({
    firstName: z.string().min(2).max(60),
    lastName: z.string().min(2).max(60),
    zipCode: z
      .string()
      .min(2)
      .max(5)
      .regex(/^[0-9]+$/),
    mail: z.string().email(),
  }),
});
