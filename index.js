const express = require('express');
// const mongoose = require('mongoose');
const testRouter = require('./testRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/test-url', testRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
