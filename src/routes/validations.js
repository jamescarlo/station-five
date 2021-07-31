import { body } from 'express-validator';

export default [
  body('conversation_id').exists().withMessage('Conversation ID is Required.'),
  body('message').exists().withMessage('Message is Required.'),
];
