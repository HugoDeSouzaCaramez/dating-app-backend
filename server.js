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

/**
 * app.get('/livros', async (req, res) => {
    try {
        const livrosResultado = await livros.find();
        res.status(200).json(livrosResultado)
    } catch (err) {
        res.status(500).json(err);
    }
})
 */

app.get('/dating/cards', async (req, res) => {
  try {
    const cards = await Cards.find();
    res.status(200).send(cards);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
