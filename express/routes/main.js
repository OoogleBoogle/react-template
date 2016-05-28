//import {express} from 'express';
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Home route");
});

// router.get('/user', (req, res) => {
//   res.send("User Route");
// });

module.exports = router;
