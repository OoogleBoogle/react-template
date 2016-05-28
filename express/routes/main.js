import express from 'express';
const router = express.Router();
import path from 'path';

let index = path.resolve('build/index.html');

router.get('/', (req, res) => {
  res.sendFile(index);
});

module.exports = router;
