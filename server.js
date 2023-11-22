import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';
//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  'mongodb+srv://admin:91537035Hugo@cluster0.0hxrude.mongodb.net/?retryWrites=true&w=majority';

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {});

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello TheWebDev'));

/**
 * M_User.create(data)
.then((result) => {
  res.send({ kq: 1, msg: 'Đã thêm thành công' })
})
.catch((err) => {
  res.send({ kq: 0, msg: 'kết nối DB thất bại' })
})
 */

app.post('/dating/cards', (req, res) => {
  const data = req.body;
  Cards.create(data)
    .then((result) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/dating/cards', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
