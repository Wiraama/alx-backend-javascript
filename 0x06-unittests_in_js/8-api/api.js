const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the Payment system');
});

app.listen(PORT, () => {
  console.log(`API avalilable on localhost port${PORT}`);
});
