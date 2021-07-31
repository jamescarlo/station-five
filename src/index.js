import express from 'express';
import dotenv from 'dotenv';
import MessageRoute from './routes/message.js'
import { BASE_PATH } from './utils/constants.js'

dotenv.config();

const app = express();
app.use(express.json());

app.use(`${BASE_PATH}/message`, MessageRoute)

app.listen(process.env.PORT || 8081, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
