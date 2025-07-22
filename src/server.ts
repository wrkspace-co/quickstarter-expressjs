import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import morgan from 'morgan';

import logger from './middleware/logger';
import indexRouter from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// middleware
app.use(morgan('dev'));
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use('/', indexRouter);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
