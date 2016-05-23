const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.NODE_PORT || 3000)
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log("Listeing on Port " + app.get('port'));
});

app.get('/', (req, res) => {
  res.send(200, "Whatever");
})

export default app;
