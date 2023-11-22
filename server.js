import express from 'express';
import mongoose from 'mongoose';
//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  'mongodb+srv://admin:yourpassword@cluster0.lggjc.mongodb.net/datingDB?retryWrites=true&w=majority';
//Middleware

//DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello TheWebDev'));
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
