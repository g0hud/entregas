const express = require('express');
const cors = require('cors');

require('dotenv').config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
});

const {connectDB} = require('./db');
connectDB();

const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
}));
app.use('/v1/api', routes);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
