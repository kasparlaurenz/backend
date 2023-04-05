import { AnyZodObject } from 'zod';

const validateBody = (schema: AnyZodObject) => async (req, res, next) => {
  const data = req.body;

  try {
    await schema.parseAsync(data);
    next();
  } catch (error) {
    res.status(400).json({
      error: error.issues.map((issue) => ({
        path: issue.path,
        message: issue.message,
      })),
    });
  }
};

export default validateBody;
