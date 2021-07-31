import express from 'express';
import { validationResult } from 'express-validator';
import validations from './validations.js';
import composeResponse from '../utils/composeResponse.js';

const router = express.Router();

router.post('/', validations ,(req, res) => {
  const { conversation_id, message } = req.body
  try {
    validationResult(req).throw()
    res.status(200).json({
      code: 200,
      status: 'Success',
      response_id: conversation_id,
      response: composeResponse(message)
    })
  } catch (e) {
    const fieldsWithErrors = []
    e.errors.forEach(i => {
      fieldsWithErrors.push({
        field: i.param,
        message: i.msg
      })
    })
    res.status(400).json({
      code: 400,
      status: 'Bad Request',
      details: fieldsWithErrors
    })
  }
});

export default router;
