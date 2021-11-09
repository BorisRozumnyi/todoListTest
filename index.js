const express = require('express');
// const mongoose = require('mongoose');
const testRouter = require('./testRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/test-url', testRouter);

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(
        `server started on port ${PORT}`
      )
    );
  } catch (error) {
    console.log('error', error.message);
  }
};

start();
