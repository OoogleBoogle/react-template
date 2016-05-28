import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/main';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(express.static('../build'));
// console.log(a);
app.get('/', router);

app.set('port', process.env.NODE_PORT || 3000)
app.listen(app.get('port'), () => {
  console.log("Listeing on Port " + app.get('port'));
});

export default app;
