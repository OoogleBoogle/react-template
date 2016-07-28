var express = require('express'),
    router = express.Router(),
    path = require('path');

var index = path.resolve('build/index.html');

router.get('/', (req, res) => {
  res.sendFile(index);
});

module.exports = router;
