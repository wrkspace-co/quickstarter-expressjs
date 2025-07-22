import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import morgan from 'morgan';

import logger from './middleware/logger';
import routes from './routes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, 'views')));

// -------------------------------------------------------------
// 🌐 Middleware
// -------------------------------------------------------------
app.use(morgan('dev'));
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// -------------------------------------------------------------
// 🌐 Routes
// -------------------------------------------------------------
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use('/api', routes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// -------------------------------------------------------------
// 🚀 Start server
// -------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
