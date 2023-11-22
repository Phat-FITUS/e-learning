require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const database = require('./database');
database.connect(`mongodb+srv://${process.env.USER_DATABASE}:${process.env.PASSWORD_DATABASE}@study.hpwkd13.mongodb.net/${process.env.DATABASE_COLLECTION}?retryWrites=true&w=majority`)

app.get('/', (req, res) => res.send("Hello world!"));

const authRoute = require('./route/authorization');
app.use('/authorization', authRoute);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));