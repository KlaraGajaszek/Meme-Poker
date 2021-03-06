import * as http from 'http';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';

import { socketRouter } from './routes/socket';
import { router } from 'routes';

dotenv.config();

const app = express();
const server = http.createServer(app);

socketRouter(server);

const dbKey = process.env.DB_KEY;

if (dbKey) {
  mongoose
    .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected with DB'))
    .catch(() => console.error('Error with DB'));
} else {
  console.log(`Enviroment variable 'DB_KEY' not set. Cannot connect to DataBase`);
}

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server listening on port ${port}`));

app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(router);
