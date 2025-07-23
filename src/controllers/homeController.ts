import { Request, Response } from 'express';

export const index = (req: Request, res: Response): void => {
  res.render('index', {
    title: 'Express TS Starter',
    message: 'Welcome to your new TypeScript-powered Express app!'
  });
};
